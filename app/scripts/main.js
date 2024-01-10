import "./libs/swiper.js";

import "./libs/nouislider.min.js";

import "./libs/lightgallery.min.js";

import "./libs/dynamic_adapt.js";

import "./libs/spollers.js";

import "./libs/jquery.min.js";

// import "./libs/jquery.pagepiling.min.js";

import "./modules/yandex-map.js";

import "./modules/sliders.js";

import "./modules/accordeon.js";

import "./modules/filter-checkboxes.js";

import "./modules/range-slider.js";

import "./modules/modals.js";

// import "./libs/lenis.js";

// import "./libs/gsap.min.js";

// import "./libs/ScrollTrigger.min.js";

// import "./libs/ScrollSmoother.min.js";

import "./modules/scroll-effects.js";

const lenisConfig = {
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: "vertical",
    gestureDirection: "vertical",
    infinity: false,
    mouseMultiplier: true,
    smoothTouch: false,
    touchMultiplier: 2,
    // smoothWheel: false,
};

function initializedLenisScroll(obj) {
    let lenis = new Lenis(obj);
    if (window.innerWidth > 991.98) {
        // lenis.on("scroll", ScrollTrigger.update);
        // gsap.ticker.add((time) => {
        //     lenis.raf(time * 1000);
        // });
        // gsap.ticker.lagSmoothing(0);
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    } else {
        lenis.destroy();
    }
}
// initializedLenisScroll(lenisConfig);

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
function uniqueEffects() {
    if (window.innerWidth > 991.98) {
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
                target.style.setProperty("--width", `${divScrollCoef * 100}%`);
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
    }
}
uniqueEffects();

// FIXED HEADER
let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector(".header");
const headerDuplicate = document.querySelector(".header-duplicate");
const scrollPosition = () =>
    window.scrollY || document.documentElement.scrollTop;
const containHide = () => header?.classList.contains("hidden");

window.addEventListener("scroll", () => {
    if (document.body.classList.contains("index")) {
        if (
            scrollPosition() > lastScroll &&
            !containHide() &&
            scrollPosition() > defaultOffset
        ) {
            //scroll down
            header?.classList.add("hidden");
            // headerDuplicate?.classList.remove("hidden");
        } else if (scrollPosition() <= 0) {
            //scroll up
            // header.classList.remove("hidden");

            header?.classList.remove("hidden");
            headerDuplicate?.classList.add("hidden");
            // console.log("3");
        } else if (scrollPosition() < lastScroll && containHide()) {
            headerDuplicate?.classList.remove("hidden");
            // console.log("2");
        }
        lastScroll = scrollPosition();
    }
});

const flatBlock = document.querySelector(".flat");
const tooltip = document.querySelector(".tooltip");
if (flatBlock) {
    const flatBody = flatBlock.querySelector(".flat__body");
    const paths = flatBlock.querySelectorAll("path");
    [...paths].forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            let target = e.target;
            tooltip.classList.add("is-show");
            if (window.innerWidth > 991.98) {
                const tooltipNumber = tooltip.querySelector(".tooltip__number");
                if (tooltipNumber) {
                    tooltipNumber.innerHTML = `№${target.dataset.roomNumber}`;
                }
                setTooltipPosition(target);
            } else {
                const tooltipBody = tooltip.querySelector(".tooltip__body");
                tooltipBody.innerHTML = `
                    <button type="button" class="tooltip__close"></button>
                    <div class="tooltip__top">
                        <span class="tooltip__text"></span> квартира
                        <span class="tooltip__number">№ ${target.dataset.roomNumber}</div> 
                    </div>
                    <div class="tooltip__descr">количество комнат: ${target.dataset.bedroom}</div>
                    <div class="tooltip__bottom">
                        <a href="#" class="btn btn-transparent">Выбрать квартиру</a>
                    </div>
                `;
                tooltip.appendChild(tooltipBody);
            }
        });
        item.addEventListener("mouseleave", (e) => {
            tooltip.classList.remove("is-show");
            // tooltip.removeAttribute("style");
        });
    });
}
if (tooltip) {
    tooltip.addEventListener("click", closeTooltip);
}

function closeTooltip(event) {
    let target = event.target;
    if (target.closest("tooltip__close")) {
        target.parentNode.classList.remove("is-show");
    }
}

function setTooltipPosition(target) {
    let top = target.getBoundingClientRect().top;
    let left = target.getBoundingClientRect().left;
    let height = target.getBoundingClientRect().height;
    let width = target.getBoundingClientRect().width;
    tooltip.style.top = `${top + height / 2}px`;
    tooltip.style.left = `${left + width / 2}px`;
}

function tooltipParking() {
    if (window.innerWidth > 1023) {
        const parkingScheme = document.querySelector(".parking__schemes");
        if (parkingScheme) {
            const paths = parkingScheme.querySelectorAll("path");
            [...paths].forEach((item) => {
                item.addEventListener("mouseenter", (e) => {
                    let target = e.target;
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
                                <div class="tooltip__number">№${
                                    target.dataset.place
                                        ? target.dataset.place
                                        : "0"
                                }</div>
                            `;
                            break;
                    }
                    tooltipBody.innerHTML = html;
                    tooltip.classList.add("is-show");
                    let left = target.getBoundingClientRect().left;
                    tooltip.style.top = `${
                        target.getBoundingClientRect().bottom + 6
                    }px`;
                    tooltip.style.left = `${left}px`;
                });
                item.addEventListener("mouseleave", (e) => {
                    tooltip.classList.remove("is-show");
                    tooltip.classList.remove("gray");
                });
            });
        }
    }
}
tooltipParking();
window.addEventListener("resize", () => {
    tooltipParking();
});

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

const headerBurger = document.querySelectorAll(".header-burger");
const headerBurgerClose = document.querySelector(
    ".header-burger.header-burger-close"
);
const headerMenu = document.querySelector(".menu-header");
const overlay = document.querySelector(".overlay");
const anchorLinks = document.querySelectorAll(".menu-header__anchor a");
const allMenuLinks = document.querySelectorAll(".menu-header__body a");

let isOpen = false;

const tlMenu = gsap.timeline({ paused: true });
// if (anchorLinks) {
//     [...anchorLinks].forEach((link) => {
//         link.addEventListener("click", () => {
//             const id = link.getAttribute("href").replace("#", "");
//             const currentSection = document.getElementById(`${id}`);
//             console.log(currentSection);
//             // tlMenu.reverse();
//             document.documentElement.style.scrollBehavior = "smooth";
//             setTimeout(() => {
//                 window.scrollTo({
//                     top:
//                         currentSection.getBoundingClientRect().top +
//                         window.scrollY,
//                     behavior: "smooth",
//                 });
//             }, 2000);
//             headerMenu.classList.remove("is-active");
//             overlay.classList.remove("is-active");
//             document.body.classList.remove("lock");
//             setTimeout(() => {
//                 document.documentElement.style.scrollBehavior = "auto";
//             }, 100);
//         });
//     });
// }

gsap.utils.toArray(".menu-header__anchor a").forEach(function (a) {
    a.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: e.target.getAttribute("href"),
        });
        headerMenu.classList.remove("is-active");
        overlay.classList.remove("is-active");
        document.body.classList.remove("lock");
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = "auto";
        }, 100);
    });
});

tlMenu.to(headerMenu, 0.2, {
    x: 0,
    duration: 0.5,
});

tlMenu.to(overlay, 0.8, {
    duration: 1,
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
});
tlMenu.to(
    allMenuLinks,
    1.5,
    {
        duration: 1,
        top: 0,
        opacity: 1,
        stagger: 0.25,
        ease: "power3.in",
    },
    "-=1"
);

if (headerBurger.length) {
    [...headerBurger].forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // if (isOpen) {
            //     tlMenu.reverse();
            // } else {
            //     tlMenu.play();
            // }
            // isOpen = !isOpen;
            headerMenu.classList.toggle("is-active");
            overlay.classList.toggle("is-active");
            document.body.classList.toggle("lock");
            document.documentElement.setAttribute("style", "");
        });
    });
}
if (headerBurgerClose) {
    headerBurgerClose.addEventListener("click", (e) => {
        setTimeout(() => {
            initializedLenisScroll(lenisConfig);
        }, 300);
        headerMenu.classList.remove("is-active");
        overlay.classList.remove("is-active");
        document.body.classList.remove("lock");
    });
}

const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            [
                ...document.querySelectorAll(".menu-header__anchor a.active"),
            ].forEach((item) => {
                item.classList.remove("active");
            });
            var id = entry.target.getAttribute("id");
            var newLink = document
                .querySelector(`.menu-header__anchor [href="#${id}"]`)
                .classList.add("active");
        }
    });
};
const menuOptions = {
    threshold: 0.55,
};
const menuObserver = new IntersectionObserver(changeNav, menuOptions);
const sections = document.querySelectorAll("[data-anchor-section]");
sections.forEach((section) => {
    menuObserver.observe(section);
});

const btnFilterOpen = document.querySelector("[data-button-filter]");
const btnFilterClose = document.querySelector(".filter__close");
if (btnFilterOpen) {
    btnFilterOpen.addEventListener("click", openFilter);
}
if (btnFilterClose) {
    btnFilterClose.addEventListener("click", closeFilter);
}

function openFilter() {
    const filterBlock = document.querySelector(".filter");
    filterBlock.classList.add("is-open");
    document.body.classList.add("lock");
}
function closeFilter() {
    const filterBlock = document.querySelector(".filter");
    filterBlock.classList.remove("is-open");
    document.body.classList.remove("lock");
}

// Определение устройства и добавление класса _touch или _pc
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Mozilla: function () {
        return navigator.userAgent.match(/Mozilla/i);
    },
    Firefox: function () {
        return navigator.userAgent.match(/Firefox/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};
function addTouchClass() {
    if (isMobile.any()) {
        document.body.classList.add("_touch");
    } else {
        document.body.classList.add("_pc");
    }
}
addTouchClass();

// Open messages in flat-card
function openMessages() {
    const btnMessages = document.querySelector(".messages-flat");
    if (btnMessages) {
        if (
            document.body.classList.contains("_touch") &&
            window.innerWidth < 1023
        ) {
            btnMessages.addEventListener("click", (event) => {
                event.stopPropagation();
                btnMessages.classList.toggle("is-active");
            });
            document.addEventListener("click", () => {
                btnMessages.classList.remove("is-active");
            });
        }
    }
}
openMessages();

function setPaddingBottomFooter() {
    if (window.innerWidth < 991.98) {
        const filterBtn = document.querySelector(".btn-filter");
        const footerBottom = document.querySelector(".footer__bottom");
        const flatMobile = document.querySelector(".flat-mobile");
        if (filterBtn && footerBottom) {
            const filterBtnHeight = filterBtn.getBoundingClientRect().height;
            footerBottom.style.paddingBottom = `${filterBtnHeight + 20}px`;
        }
        if (flatMobile && footerBottom) {
            const flatMobileHeight = flatMobile.getBoundingClientRect().height;
            footerBottom.style.paddingBottom = `${flatMobileHeight + 20}px`;
        }
    } else {
        return false;
    }
}
setPaddingBottomFooter();
window.addEventListener("resize", () => {
    openMessages();
    setPaddingBottomFooter();
});

// Маска для телефона
function maskPhone(elem = document) {
    let inputs = elem.querySelectorAll('input[type="tel"]');
    if (inputs.length) {
        //inputs = once("inputs",inputs);
        inputs.forEach((phone) => {
            let code = "+7",
                find = /\+7/;
            code = "+7";
            find = /\+7/;
            phone.addEventListener("focus", function () {
                phone.value = code + " " + phone.value.replace(code + " ", "");
            });
            phone.addEventListener("input", function () {
                let val = phone.value.replace(find, ""),
                    res = code + " ";
                val = val.replace(/[^0-9]/g, "");
                for (let i = 0; i < val.length; i++) {
                    res += i === 0 ? " (" : "";
                    res += i == 3 ? ") " : "";
                    res += i == 6 || i == 8 ? "-" : "";
                    if (i == 10) break;
                    res += val[i];
                }
                phone.value = res;
            });
            phone.addEventListener("blur", function () {
                let val = phone.value.replace(find, "");
                val = val.trim();
                if (!val) phone.value = null;
            });
        });
    }
}
maskPhone();
