(function () {
    "use strict";

    var modal;
    var modalImage;
    var modalTitle;
    var closeButton;
    var lastTrigger;

    function updatePauseButton(container, isPaused) {
        var pauseButton = container.querySelector("[data-media-pause]");
        var icon;
        var label;

        if (!pauseButton) {
            return;
        }

        icon = pauseButton.querySelector("i");
        label = pauseButton.querySelector("span");
        pauseButton.setAttribute("aria-pressed", isPaused ? "true" : "false");
        pauseButton.setAttribute("aria-label", isPaused ? "Resume animation" : "Pause animation");

        if (icon) {
            icon.className = isPaused ? "fa fa-play" : "fa fa-pause";
        }
        if (label) {
            label.textContent = isPaused ? "Resume" : "Pause";
        }
    }

    function getAnimationElements(container) {
        var stage = container.querySelector(".os-expandable-media-stage, .os-media-modal-stage");
        var image = stage ? stage.querySelector("img") : null;
        var canvas = stage ? stage.querySelector("canvas") : null;

        if (stage && !canvas) {
            canvas = document.createElement("canvas");
            canvas.className = "os-media-paused-frame";
            canvas.hidden = true;
            stage.appendChild(canvas);
        }

        return {
            stage: stage,
            image: image,
            canvas: canvas
        };
    }

    function setPaused(container, isPaused) {
        var elements = getAnimationElements(container);
        var context;

        if (!elements.image || !elements.canvas) {
            return;
        }

        if (isPaused && !elements.image.complete) {
            elements.image.addEventListener("load", function () {
                setPaused(container, true);
            }, { once: true });
            return;
        }

        if (isPaused) {
            elements.canvas.width = elements.image.naturalWidth || elements.image.width;
            elements.canvas.height = elements.image.naturalHeight || elements.image.height;
            context = elements.canvas.getContext("2d");
            context.drawImage(elements.image, 0, 0, elements.canvas.width, elements.canvas.height);
            elements.canvas.hidden = false;
            elements.image.hidden = true;
        } else {
            elements.canvas.hidden = true;
            elements.image.hidden = false;
        }

        container.setAttribute("data-media-paused", isPaused ? "true" : "false");
        updatePauseButton(container, isPaused);
    }

    function replayAnimation(container) {
        var elements = getAnimationElements(container);
        var source;

        if (!elements.image) {
            return;
        }

        setPaused(container, false);
        source = elements.image.getAttribute("data-animation-src") || elements.image.currentSrc || elements.image.src;
        elements.image.removeAttribute("src");
        window.requestAnimationFrame(function () {
            elements.image.src = source;
        });
    }

    function createModal() {
        modal = document.createElement("div");
        modal.className = "os-media-modal";
        modal.hidden = true;
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-labelledby", "os-media-modal-title");
        modal.innerHTML = [
            '<div class="os-media-modal-window">',
            '  <div class="os-media-modal-toolbar">',
            '    <span id="os-media-modal-title" class="os-media-modal-title"></span>',
            '    <div class="os-expandable-media-actions">',
            '      <button class="os-expandable-media-control" type="button" data-media-pause aria-pressed="false" aria-label="Pause animation">',
            '        <i class="fa fa-pause" aria-hidden="true"></i><span>Pause</span>',
            '      </button>',
            '      <button class="os-expandable-media-control" type="button" data-media-replay aria-label="Replay animation">',
            '        <i class="fa fa-repeat" aria-hidden="true"></i><span>Replay</span>',
            '      </button>',
            '      <button class="os-media-modal-close" type="button" aria-label="Close expanded animation">',
            '        <i class="fa fa-times" aria-hidden="true"></i><span>Close</span>',
            '      </button>',
            '    </div>',
            '  </div>',
            '  <div class="os-media-modal-stage">',
            '    <img alt="">',
            '  </div>',
            '</div>'
        ].join("");

        document.body.appendChild(modal);
        modalImage = modal.querySelector("img");
        modalTitle = modal.querySelector(".os-media-modal-title");
        closeButton = modal.querySelector(".os-media-modal-close");
    }

    function closeModal() {
        if (!modal || modal.hidden) {
            return;
        }

        modal.hidden = true;
        modalImage.removeAttribute("src");
        modalImage.removeAttribute("data-animation-src");
        document.body.classList.remove("os-media-modal-open");

        if (lastTrigger && document.documentElement.contains(lastTrigger)) {
            lastTrigger.focus();
        }
    }

    function openModal(trigger) {
        var mediaWindow = trigger.closest(".os-expandable-media-window");
        var sourceImage;

        if (!mediaWindow) {
            return;
        }

        sourceImage = mediaWindow.querySelector("img");
        if (!sourceImage) {
            return;
        }

        if (!modal) {
            createModal();
        }

        lastTrigger = trigger;
        modalTitle.textContent = mediaWindow.getAttribute("data-media-title") || sourceImage.alt;
        modalImage.src = sourceImage.currentSrc || sourceImage.src;
        modalImage.setAttribute("data-animation-src", sourceImage.currentSrc || sourceImage.src);
        modalImage.alt = sourceImage.alt;
        setPaused(modal, false);
        modal.hidden = false;
        document.body.classList.add("os-media-modal-open");
        closeButton.focus();
    }

    document.addEventListener("click", function (event) {
        var pauseTrigger = event.target.closest("[data-media-pause]");
        var replayTrigger = event.target.closest("[data-media-replay]");
        var expandTrigger = event.target.closest("[data-media-expand]");
        var mediaContainer;

        if (pauseTrigger) {
            mediaContainer = pauseTrigger.closest(".os-expandable-media-window, .os-media-modal");
            if (mediaContainer) {
                setPaused(mediaContainer, mediaContainer.getAttribute("data-media-paused") !== "true");
            }
            return;
        }

        if (replayTrigger) {
            mediaContainer = replayTrigger.closest(".os-expandable-media-window, .os-media-modal");
            if (mediaContainer) {
                replayAnimation(mediaContainer);
            }
            return;
        }

        if (expandTrigger) {
            openModal(expandTrigger);
            return;
        }

        if (modal && (event.target === modal || event.target.closest(".os-media-modal-close"))) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll(".os-expandable-media-window").forEach(function (mediaWindow) {
            setPaused(mediaWindow, true);
        });
    }
})();
