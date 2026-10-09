/* Keep fragment links aligned while images and embedded diagrams finish rendering. */
require(['gitbook'], function (gitbook) {
    var interval;
    var expiry;
    var frame;
    var requestedHref;

    function stopTracking() {
        clearInterval(interval);
        clearTimeout(expiry);
        cancelAnimationFrame(frame);
        requestedHref = null;
    }

    function alignFragment(href) {
        stopTracking();
        var url = new URL(href || window.location.href, window.location.href);
        if (!url.hash || url.origin !== window.location.origin) return;
        var id;
        try { id = decodeURIComponent(url.hash.slice(1)); }
        catch (error) { return; }
        requestedHref = url.href;
        var lastDesired;

        function align() {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(function () {
                if (window.location.pathname !== url.pathname) return;
                var target = document.getElementById(id);
                var content = document.querySelector('.page-inner');
                if (!target || !content || !content.contains(target)) return;
                // Include a primary section's step label, but keep subsection links precise.
                var section = target.closest('.os-workflow-step, .os-guide-section, .os-props-section, .os-pm-section, .os-data-section, .os-home-section');
                var destination = target.tagName === 'H2' ? (section || target) : target;
                var inner = document.querySelector('.body-inner');
                // Select the actual scrollable pane, not a width heuristic: the
                // manual's layout can keep body-inner scrollable on narrow screens.
                var container = inner && inner.scrollHeight > inner.clientHeight ? inner : document.querySelector('.book-body');
                if (!container) return;
                var top = container.getBoundingClientRect().top + container.clientTop;
                var desired = container.scrollTop + destination.getBoundingClientRect().top - top;
                // Clamp near the end of a page, where the target cannot reach the top.
                desired = Math.max(0, Math.min(desired, container.scrollHeight - container.clientHeight));
                // Correct only a changed content position, not a competing scroll or
                // a rounding difference. Stable pages need just one alignment.
                if (lastDesired !== undefined && Math.abs(lastDesired - desired) < 2) return;
                lastDesired = desired;
                if (Math.abs(container.scrollTop - desired) < 2) return;
                // Scroll only the content pane, never its outer ancestors or sidebar.
                container.scrollTop = desired;
            });
        }

        align();
        // Also covers delayed diagram rendering and older browsers without ResizeObserver.
        interval = setInterval(align, 100);
        expiry = setTimeout(stopTracking, 8000);
    }

    gitbook.events.bind('page.change', function () { alignFragment(requestedHref); });
    window.addEventListener('hashchange', function () { alignFragment(); });
    document.addEventListener('click', function (event) {
        var link = event.target.closest('a[href]');
        if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
        var url = new URL(link.href, window.location.href);
        if (url.origin === window.location.origin && url.hash && !link.hasAttribute('download')) {
            setTimeout(function () { alignFragment(url.href); }, 0);
        }
    }, true);
    // A deliberate user interaction always takes priority over layout settling.
    document.addEventListener('wheel', stopTracking, { passive: true, capture: true });
    document.addEventListener('touchstart', stopTracking, { passive: true, capture: true });
    document.addEventListener('pointerdown', stopTracking, true);
    document.addEventListener('keydown', stopTracking, true);
    alignFragment();
});
