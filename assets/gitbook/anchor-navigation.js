/* Keep fragment links aligned while images and embedded diagrams finish rendering. */
require(['gitbook', 'jQuery'], function (gitbook, $) {
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
                var container = window.innerWidth <= 1240 ? document.querySelector('.book-body') : document.querySelector('.body-inner');
                var top = container ? container.getBoundingClientRect().top : 0;
                if (Math.abs(destination.getBoundingClientRect().top - top) < 2) return;
                // Cancel the theme's fixed-offset animation before using the current layout.
                $('.body-inner, .book-body').stop(true);
                destination.scrollIntoView({ block: 'start', behavior: 'auto' });
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
