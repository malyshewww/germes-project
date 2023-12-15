// import "./modules/gsap.min.js";

// import "./modules/ScrollTrigger.min.js";

gsap.registerPlugin(ScrollTrigger);

import "./libs/swiper.js";

import "./libs/nouislider.min.js";

import "./libs/lightgallery.min.js";

import "./modules/yandex-map.js";

import "./modules/sliders.js";

import "./modules/accordeon.js";

import "./modules/filter-checkboxes.js";

import "./modules/range-slider.js";

const { innerHeight, innerWidth } = window;
let options = {
        width: "600px",
        height: "600px",
    },
    el = document.querySelector(".history__overlay");

let tl = gsap.timeline({
    scale: 1,
    stager: 0.25,
    duration: 1,
    scrollTrigger: {
        trigger: "#history",
        start: "center center",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        // x: innerWidth / 2,
        // y: innerHeight / 2,

        scrub: 3,
    },
});
tl.to(".history__overlay", {
    scale: 0,
});
tl.to(".history__overlay img", {
    clipPath: "circle(50% at 50% 50%)",
    xPercent: -50,
    yPercent: -50,
});

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
        console.log(entry.boundingClientRect);
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
    if (document.body.classList.contains("home")) {
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
        }
        currScroll = window.scrollY;
    }
});

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
