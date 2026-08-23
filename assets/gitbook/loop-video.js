/**
 * Drives the looping-video.html include.
 *
 * Autoplay is started here rather than with the `autoplay` attribute so that a
 * reader who has asked for reduced motion gets a still poster frame and a play
 * button instead of movement they did not ask for. Videos below the fold do not
 * start until scrolled to, which keeps a page with several of them from
 * decoding all at once.
 */
(function () {
    "use strict";

    var reduceMotion = window.matchMedia
        && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function setToggleState(figure, paused) {
        var button = figure.querySelector("[data-loop-toggle]");
        if (!button) {
            return;
        }
        var icon = button.querySelector("i");
        var label = button.querySelector("span");
        var title = figure.querySelector(".os-expandable-media-title");
        var name = title ? title.textContent.trim() : "animation";

        button.setAttribute("aria-pressed", paused ? "true" : "false");
        button.setAttribute("aria-label", (paused ? "Play " : "Pause ") + name);
        if (icon) {
            icon.className = paused ? "fa fa-play" : "fa fa-pause";
        }
        if (label) {
            label.textContent = paused ? "Play" : "Pause";
        }
    }

    function wire(figure) {
        var video = figure.querySelector(".os-loop-video-stage");
        if (!video) {
            return;
        }

        video.muted = true;

        var toggle = figure.querySelector("[data-loop-toggle]");
        var restart = figure.querySelector("[data-loop-restart]");

        // The markup ships with a "Pause" label. Correct it to whatever is
        // actually true right now: if playback never starts - autoplay refused,
        // reduced motion, script cached stale - a button reading "Pause" over a
        // motionless video tells the reader the opposite of what to do.
        setToggleState(figure, video.paused);
        figure.classList.toggle("is-paused", video.paused);

        if (toggle) {
            toggle.addEventListener("click", function () {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }

        if (restart) {
            restart.addEventListener("click", function () {
                video.currentTime = 0;
                video.play();
            });
        }

        video.addEventListener("play", function () {
            setToggleState(figure, false);
            figure.classList.remove("is-paused");
        });
        video.addEventListener("pause", function () {
            setToggleState(figure, true);
            figure.classList.add("is-paused");
        });

        // Clicking the video itself is the obvious gesture; honour it.
        video.addEventListener("click", function () {
            if (video.paused) { video.play(); } else { video.pause(); }
        });

        if (reduceMotion) {
            setToggleState(figure, true);
            return;
        }

        if (!("IntersectionObserver" in window)) {
            video.play();
            setToggleState(figure, false);
            return;
        }

        new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }
                var playing = video.play();
                if (playing && playing.catch) {
                    // Autoplay can still be refused; leave the poster showing.
                    playing.catch(function () { setToggleState(figure, true); });
                }
                observer.unobserve(entry.target);
            });
        }, { rootMargin: "120px" }).observe(video);
    }

    function init() {
        var figures = document.querySelectorAll(".os-loop-video");
        Array.prototype.forEach.call(figures, wire);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
