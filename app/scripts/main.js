import "./modules/yandex-map.js";

const homeSlider = document.querySelector(".home-slider__body");
let homeSwiper;
if (homeSlider) {
    const sliderButtonsPrev = homeSlider.querySelectorAll(
        ".slider-button-prev"
    );
    const sliderButtonsNext = homeSlider.querySelectorAll(
        ".slider-button-next"
    );
    let slides = homeSlider.children[0].children;
    homeSwiper = new Swiper(homeSlider, {
        slidePerView: 1,
        speed: 1000,
        speceBetween: 0,
        // pagination: {
        //     el: parent.querySelector(".slider-pagination"),
        //     type: "fraction",
        // },
        // navigation: {
        //     nextEl: parent.querySelector(".slider-button-next"),
        //     prevEl: parent.querySelector(".slider-button-prev"),
        // },
        on: {
            init: function () {
                goToSlidePrev(sliderButtonsPrev);
                goToSlideNext(sliderButtonsNext);
                setPaginationNumbers(slides);
            },
        },
    });
}
function goToSlidePrev(buttons) {
    [...buttons].forEach((btn) => {
        btn.addEventListener("click", (event) => {
            homeSwiper.slidePrev();
        });
    });
}
function goToSlideNext(buttons) {
    [...buttons].forEach((btn) => {
        btn.addEventListener("click", (event) => {
            homeSwiper.slideNext();
        });
    });
}
function setPaginationNumbers(arrSlides) {
    [...arrSlides].forEach((slide, index) => {
        const pagination = slide.querySelector(".slider-pagination");
        const current = pagination.querySelector(".slider-pagination-current");
        const total = pagination.querySelector(".slider-pagination-total");
        current.innerHTML = index + 1;
        total.innerHTML = arrSlides.length;
    });
}

const historySlider = document.querySelector(".history-slider__body");
if (historySlider) {
    let historySwiper = new Swiper(historySlider, {
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", "0%", 0],
            },
        },
        slidePerView: 1,
        speed: 1000,
        speceBetween: 0,
        navigation: {
            nextEl: historySlider.querySelector(".slider-button-next"),
            prevEl: historySlider.querySelector(".slider-button-prev"),
        },
    });
}

let architectureSwiper;
const architectureSlider = document.querySelector(".architecure-slider__body");
if (architectureSlider) {
    let slides = architectureSlider.children[0].children;
    const sliderBtnPrev = architectureSlider.querySelector(
        ".slider-button-prev"
    );
    const sliderBtnNext = architectureSlider.querySelector(
        ".slider-button-next"
    );
    architectureSwiper = new Swiper(architectureSlider, {
        slidePerView: 1,
        speed: 1000,
        effect: "fade",
        navigation: {
            nextEl: sliderBtnNext,
            prevEl: sliderBtnPrev,
        },
        on: {
            init: function () {
                setPaginationNumbers(slides);
            },
        },
    });
    // let width = window.screen.width;
    // architectureSlider.addEventListener("mousemove", (e) => {
    //     console.log(e);
    //     let blockTop = architectureSlider.getBoundingClientRect().top;
    //     let blockBottom = architectureSlider.getBoundingClientRect().height;
    //     console.log(blockBottom);
    //     if (width / 2 - (width - e.clientX) > 0) {
    //         if (!sliderBtnNext.classList.contains("swiper-button-disabled")) {
    //             sliderBtnNext.classList.add("is-visible");
    //             sliderBtnPrev.classList.remove("is-visible");
    //             sliderBtnNext.style.left = `${e.clientX - 40}px`;
    //             sliderBtnNext.style.top = `${e.clientY - 40}px`;
    //         }
    //         sliderBtnPrev.classList.remove("is-visible");
    //     } else {
    //         if (!sliderBtnPrev.classList.contains("swiper-button-disabled")) {
    //             sliderBtnNext.classList.remove("is-visible");
    //             sliderBtnPrev.classList.add("is-visible");
    //             sliderBtnPrev.style.left = `${e.clientX - 40}px`;
    //             sliderBtnPrev.style.top = `${e.clientY - 40}px`;
    //         }
    //         sliderBtnNext.classList.remove("is-visible");
    //     }
    //     if (blockTop > e.clientY) {
    //         sliderBtnPrev.classList.remove("is-visible");
    //         sliderBtnNext.classList.remove("is-visible");
    //     }
    // });
    // architectureSlider.addEventListener("mouseleave", (e) => {
    //     console.log(e);
    //     sliderBtnPrev.classList.remove("is-visible");
    //     sliderBtnNext.classList.remove("is-visible");
    // });
}

let freePlanSwiper;
const freePlanSlider = document.querySelector(".free-plan-slider__body");
if (freePlanSlider) {
    const parent = freePlanSlider.closest(".free-plan");
    let planTabsArr = parent.querySelectorAll(".free-plan__tab");
    const freePlanBtnPrev = parent.querySelector(".slider-button-prev");
    const freePlanBtnNext = parent.querySelector(".slider-button-next");
    freePlanSwiper = new Swiper(freePlanSlider, {
        slidePerView: 1,
        speed: 1000,
        speceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
            prevEl: freePlanBtnPrev,
            nextEl: freePlanBtnNext,
        },
        on: {
            init: function () {
                planTabs();
            },
            slideChange: function () {
                planTabsRemove();
                planTabsArr[freePlanSwiper.realIndex].classList.add(
                    "is-active"
                );
            },
        },
    });
}
function planTabs() {
    const planTabs = document.querySelectorAll(".free-plan__tab");
    if (planTabs.length > 0) {
        [...planTabs].forEach((tab, index) => {
            tab.addEventListener("click", (event) => {
                event.preventDefault();
                planTabsRemove();
                freePlanSwiper.slideTo(index);
                event.target.classList.add("is-active");
            });
        });
    }
}
function planTabsRemove() {
    let planTabActive = document.querySelector(".free-plan__tab.is-active");
    if (planTabActive) {
        planTabActive.classList.remove("is-active");
    }
}

const newsSlider = document.querySelector(".news-slider__body");
if (newsSlider) {
    let parent = newsSlider.closest(".news");
    let buttonPrev = parent.querySelector(".slider-button-prev");
    let buttonNext = parent.querySelector(".slider-button-next");
    let newsSwiper = new Swiper(newsSlider, {
        spaceBetween: 30,
        slidesPerView: 2,
        speed: 1000,
        navigation: {
            prevEl: buttonPrev,
            nextEl: buttonNext,
        },
    });
}

const offerSlider = document.querySelector(".offers-slider__body");
if (offerSlider) {
    let offerSwiper = new Swiper(offerSlider, {
        spaceBetween: 0,
        freeMode: true,
        slidesPerView: "auto",
        speed: 700,
    });
}

const dynamicSlider = document.querySelector(".dynamic-slider__body");
if (dynamicSlider) {
    let slides = dynamicSlider.children[0].children;
    let dynamicCursor = document.querySelector(".dynamic-cursor");
    let parent = dynamicSlider.closest(".dynamic");
    let buttonPrev = parent.querySelector(".slider-button-prev");
    let buttonNext = parent.querySelector(".slider-button-next");
    let dynamicSwiper = new Swiper(dynamicSlider, {
        spaceBetween: 30,
        freeMode: false,
        slidesPerView: "auto",
        speed: 700,
        navigation: {
            prevEl: buttonPrev,
            nextEl: buttonNext,
        },
    });
    // Плавающий курсор
    [...slides].forEach((item) => {
        let image = item.querySelector(".dynamic-slider__image");
        image.addEventListener("mouseenter", (ev) => {
            dynamicCursor.style.opacity = "1";
        });
        image.addEventListener("mousemove", (ev) => {
            dynamicCursor.style.transform = `translateY(${
                ev.clientY - 80 / 2
            }px)`;
            dynamicCursor.style.transform += `translateX(${
                ev.clientX - 80 / 2
            }px)`;
        });
        image.addEventListener("mouseout", (ev) => {
            dynamicCursor.style.opacity = "0";
        });
    });
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

const accordeon = document.querySelector(".accordeon");
if (accordeon) {
    const accordeonItems = accordeon.querySelectorAll(".accordeon__item");
    [...accordeonItems].forEach((item, index) => {
        const header = item.querySelector(".accordeon__header");
        header.addEventListener("click", () => {
            console.log("header");
            item.classList.toggle("is-open");
            let content = item.querySelector(".accordeon__content");
            if (item.classList.contains("is-open")) {
                content.style.height = `${content.scrollHeight}px`;
            } else {
                content.style.height = "0px";
            }
            removeAccordeonOpen(index);
        });
    });
    function removeAccordeonOpen(index1) {
        [...accordeonItems].forEach((item2, index2) => {
            if (index1 != index2) {
                item2.classList.remove("is-open");
                let contentTwo = item2.querySelector(".accordeon__content");
                contentTwo.style.height = "0px";
            }
        });
    }
}

let currScroll = window.scrollY;
let isHidden = false;
document.addEventListener("scroll", () => {
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
