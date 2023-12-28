let wrapper = document.querySelector(".wrapper");
const modalButtons = wrapper?.querySelectorAll("[data-modal-button]");
const modalClosebuttons = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal]");

function closeModal(currentModal) {
    currentModal.classList.remove("open-modal");
    body_lock_remove();
}

document.addEventListener("click", openModal);
function openModal(event) {
    const target = event.target;
    if (target.closest("[data-modal-button]")) {
        event.preventDefault();
        const modalId = target.dataset.modalButton;
        const modal = document.getElementById(modalId);
        modal.classList.add("open-modal");
        body_lock();
    }
}

// Кнопки - Закрыть Модалку
modalClosebuttons.forEach((item) => {
    item.addEventListener("click", () => {
        let currentModal = item.closest(".modal");
        closeModal(currentModal);
    });
});
// Закрытие модалок по фейду
allModals.forEach((item) => {
    item.style.display = "none";
    item.addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.remove("open-modal");
        body_lock_remove();
    });
    const modalContent = item.querySelector(".modal__content");
    modalContent.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
document.addEventListener("DOMContentLoaded", (event) => {
    allModals.forEach((item) => {
        item.style.display = "block";
    });
});

let delay = 500;
let unlock = true;
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains("lock")) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}
function body_lock_remove(delay) {
    const body = document.querySelector("body");
    const lockPadding = document.querySelectorAll(".lock-padding");
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = "0px";
            }
        }
        body.style.paddingRight = "0px";
        body.classList.remove("lock");
    }, delay);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, delay);
}
function body_lock_add(delay) {
    const body = document.querySelector("body");
    const lockPaddingValue =
        window.innerWidth -
        document.querySelector(".wrapper").offsetWidth +
        "px";
    const lockPadding = document.querySelectorAll(".lock-padding");
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, delay);
}