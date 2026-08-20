(function () {
    "use strict";

    var modal;
    var modalImage;
    var modalTitle;
    var closeButton;
    var lastTrigger;

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
            '    <button class="os-media-modal-close" type="button" aria-label="Close expanded animation">',
            '      <i class="fa fa-times" aria-hidden="true"></i><span>Close</span>',
            '    </button>',
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
        modalImage.alt = sourceImage.alt;
        modal.hidden = false;
        document.body.classList.add("os-media-modal-open");
        closeButton.focus();
    }

    document.addEventListener("click", function (event) {
        var expandTrigger = event.target.closest("[data-media-expand]");

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
})();
