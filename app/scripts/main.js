import "./libs/swiper.js";

import "./libs/nouislider.min.js";

import "./libs/lightgallery.min.js";

import "./modules/yandex-map.js";

import "./modules/sliders.js";

import "./modules/accordeon.js";

import "./modules/filter-checkboxes.js";

import "./modules/range-slider.js";

// import "./libs/lenis.js";

// import "./libs/gsap.min.js";

// import "./libs/ScrollTrigger.min.js";

// import "./libs/ScrollSmoother.min.js";

import "./modules/scroll-effects.js";

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const initializedLenisScroll = () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
};

function initGallery() {
    const galleries = document.querySelectorAll(".gallery");
    [...galleries].forEach((gallery) => {
        lightGallery(gallery, {
            // plugins: [lgZoom, lgThumbnail],
            speed: 500,
            selector: ".gallery-item",
            // ... other settings
        });
    });
}
initGallery();

const btnBack = document.querySelector(".btn-back");
function GoBack() {
    window.history.back();
}
if (btnBack) {
    btnBack.addEventListener("click", GoBack);
}

// Секция unique
const tabs = document.querySelectorAll(".unique__tab");
let config = {
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.5,
};
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        }
    });
}, config);

function intersectionHandler(entry) {
    const current = document.querySelector(".unique__tab.is-active");
    const next = entry.target;
    // const header = next.querySelector(".section--header");

    // if (current) {
    //     current.classList.remove("is-active");
    // }
    if (next) {
        next.classList.add("is-active");
        //   document.body.style.setProperty("--color-bg", next.dataset.bgcolor);
    }
}
tabs.forEach((tab) => {
    observer.observe(tab);
});

let count = 0;
let activeScroll = false;
const uniqueTabs = document.querySelector(".unique__tabs");
window.addEventListener("scroll", function (e) {
    tabs.forEach((tab) => {
        updateVarWidth(tab);
        // if (tab.classList.contains("is-active")) {
        // }
    });
});

function updateVarWidth(target) {
    let divScrollCoef = getScrollCoef(target);
    setTimeout(() => {
        target.style.setProperty("--width", `${divScrollCoef * 90}%`);
    }, 300);
}
function getScrollCoef(element) {
    var elementRect = element.getBoundingClientRect(),
        elementOffsetTop = elementRect.top,
        elementOffsetBottom = elementRect.bottom,
        windowOffsetBottom = document.documentElement.clientHeight,
        coef;

    if (windowOffsetBottom < elementOffsetTop) {
        coef = 0;
    } else if (windowOffsetBottom > elementOffsetBottom) {
        coef = 1;
    } else {
        coef =
            (windowOffsetBottom - elementOffsetTop) /
            (elementOffsetBottom - elementOffsetTop);
    }

    return coef;
}

let currScroll = window.scrollY;
let isHidden = false;
document.addEventListener("scroll", () => {
    if (document.body.classList.contains("index")) {
        if (currScroll <= window.scrollY && window.scrollY > 0) {
            if (!isHidden) {
                document.querySelector("header").classList.add("hidden");
                document
                    .querySelector(".header.header-duplicate")
                    .classList.remove("hidden");
                isHidden = true;
            }
        } else {
            if (isHidden) {
                document.querySelector("header").classList.remove("hidden");
                document
                    .querySelector(".header.header-duplicate")
                    .classList.add("hidden");
                isHidden = false;
            }
            currScroll = window.scrollY;
        }
    }
});

const flatBlock = document.querySelector(".flat");
const tooltip = document.querySelector(".tooltip");
if (flatBlock) {
    const flatBody = flatBlock.querySelector(".flat__body");
    const paths = flatBlock.querySelectorAll("path");
    [...paths].forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            const tooltipNumber = tooltip.querySelector(".tooltip__number");
            let target = e.target;
            tooltip.classList.add("is-show");
            tooltipNumber.innerHTML = `№${target.dataset.roomNumber}`;
            let top = target.getBoundingClientRect().top;
            let left = target.getBoundingClientRect().left;
            let height = target.getBoundingClientRect().height;
            let width = target.getBoundingClientRect().width;
            tooltip.style.top = `${top + height / 2}px`;
            tooltip.style.left = `${left + width / 2}px`;
        });
        item.addEventListener("mouseleave", (e) => {
            tooltip.classList.remove("is-show");
            // tooltip.removeAttribute("style");
        });
    });
}

const parkingScheme = document.querySelector(".parking__schemes");
if (parkingScheme) {
    const paths = parkingScheme.querySelectorAll("path");
    [...paths].forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            let target = e.target;
            console.log(target);
            const tooltipBody = tooltip.querySelector(".tooltip__body");
            let html = "";
            const status = target.dataset.status;
            switch (status) {
                case "sold":
                    tooltip.classList.add("gray");
                    html = `
                        <div class="tooltip__text">место продано</div>
                    `;
                    break;
                default:
                    html = `
                        <div class="tooltip__text">место</div>
                        <div class="tooltip__number">№${target.dataset.place}</div>
                    `;
                    break;
            }
            tooltipBody.innerHTML = html;
            tooltip.classList.add("is-show");
            let top = target.getBoundingClientRect().top;
            let left = target.getBoundingClientRect().left;
            let height = target.getBoundingClientRect().height;
            let width = target.getBoundingClientRect().width;
            tooltip.style.top = `${
                target.getBoundingClientRect().bottom + 6
            }px`;
            tooltip.style.left = `${left}px`;
        });
        item.addEventListener("mouseleave", (e) => {
            tooltip.classList.remove("is-show");
            tooltip.classList.remove("gray");
            // tooltip.removeAttribute("style");
        });
    });
}

// let percent = 0;
// window.addEventListener("wheel", (e) => {
//     if (e.deltaY > 0) {
//         percent++;
//         tabs.forEach((tab) => {
//             const { scrollTop, scrollHeight } = document.documentElement;
//             let top = tab.getBoundingClientRect().top;
//             let height = tab.getBoundingClientRect().height;
//             const scrollPercent = `${((top - scrollTop) / height) * percent}%`;
//             // console.log(scrollPercent);
//             if (tab.classList.contains("is-active")) {
//                 tab.style.setProperty("--gradient-black", `${percent}%`);
//                 tab.style.setProperty("--gradient-gray", `${percent}%`);
//             }
//         });
//     }
// });

const flatTabs = document.querySelector(".flat-tabs");
if (flatTabs) {
    const tabTriggers = flatTabs.querySelectorAll("[data-tab]");
    const tabContent = flatTabs.querySelectorAll("[data-tab-content]");
    [...tabTriggers].forEach((tab) => {
        tab.addEventListener("click", (event) => {
            const target = event.target;
            const id = target.dataset.tab;
            const currentTabContnet = document.querySelector(
                `[data-tab-content="${id}"]`
            );
            tabContent.forEach((content) =>
                content.classList.remove("is-show")
            );
            tabTriggers.forEach((trigger) =>
                trigger.classList.remove("is-active")
            );
            currentTabContnet.classList.add("is-show");
            target.classList.add("is-active");
            console.log(target.offsetWidth);
        });
    });
    if (tabTriggers.length) {
        tabTriggers[0].click();
    }
}

const schemeRadioButtons = document.querySelectorAll("[data-parking]");
const schemeBlocks = document.querySelectorAll("[data-scheme]");

if (schemeRadioButtons.length) {
    [...schemeRadioButtons].forEach((btn) => {
        btn.addEventListener("change", (event) => {
            const target = event.target;
            const id = target.dataset.parking;
            const currentScheme = document.querySelector(
                `[data-scheme="${id}"]`
            );
            if (schemeBlocks.length) {
                [...schemeBlocks].forEach((block) =>
                    block.classList.remove("is-show")
                );
            }
            [...schemeRadioButtons].forEach((item) =>
                item.classList.remove("is-active")
            );
            target.classList.add("is-active");
            currentScheme.classList.add("is-show");
        });
    });
    schemeRadioButtons[0].click();
}

const headerBurger = document.querySelectorAll(
    ".header-burger:not(.header-burger-close)"
);
const headerBurgerClose = document.querySelector(
    ".header-burger.header-burger-close"
);
const headerMenu = document.querySelector(".menu-header");
const overlay = document.querySelector(".overlay");

const anchorLinks = document.querySelectorAll(".menu-header__anchor a");

if (anchorLinks) {
    [...anchorLinks].forEach((link) => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("href").replace("#", "");
            const currentSection = document.getElementById(`${id}`);
            // этот код меняет поведение прокрутки на "smooth"
            window.scrollTo({
                top:
                    currentSection.getBoundingClientRect().top + window.scrollY,
                behavior: "smooth",
            });
            headerMenu.classList.remove("is-active");
            overlay.classList.remove("is-active");
        });
    });
}

// let tlMenu = gsap.timeline({ paused: true });
// let tlMenuClose = gsap.timeline({ paused: true });

// tlMenu.to(overlay, {
//     clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
// });
// tlMenu.to(overlay, {
//     opacity: 1,
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
// });

// tlMenu.to(headerMenu, {
//     x: "0",
// });

if (headerBurger.length) {
    [...headerBurger].forEach((btn) => {
        btn.addEventListener("click", () => {
            lenis.destroy();
            headerMenu.classList.toggle("is-active");
            overlay.classList.toggle("is-active");
            document.body.classList.toggle("lock");
            document.documentElement.setAttribute("class", "");
        });
    });
}
if (headerBurgerClose) {
    headerBurgerClose.addEventListener("click", (e) => {
        initializedLenisScroll();
        headerMenu.classList.remove("is-active");
        overlay.classList.remove("is-active");
        document.body.classList.remove("lock");
    });
}
document.addEventListener("load", () => {
    lenis.start();
});

// simple function to use for callback in the intersection observer
const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        // verify the element is intersecting
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            // remove old active class
            [
                ...document.querySelectorAll(".menu-header__anchor a.active"),
            ].forEach((item) => {
                item.classList.remove("active");
            });
            // get id of the intersecting section
            var id = entry.target.getAttribute("id");
            // find matching link & add appropriate class
            var newLink = document
                .querySelector(`.menu-header__anchor [href="#${id}"]`)
                .classList.add("active");
        }
    });
};

// init the observer
const menuOptions = {
    threshold: 0.55,
};

const menuObserver = new IntersectionObserver(changeNav, menuOptions);

// target the elements to be observed
const sections = document.querySelectorAll("[data-anchor-section]");
sections.forEach((section) => {
    menuObserver.observe(section);
});
