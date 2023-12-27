const globalSlider = document.querySelector(".global-slider");
let globalSwiper;
if (globalSlider) {
    globalSwiper = new Swiper(globalSlider, {
        speed: 1000,
        speceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: false,
        grapCursor: false,
        simulateTouch: false,
        direction: "vertical",
    });
}
const homeSlider = document.querySelector(".home-slider__body");
let homeSwiper = {};
var sliderType = window.innerWidth <= 991.98 ? "mobile" : "desktop";
if (homeSlider) {
    function initSlider(type) {
        var sliderSettings = {};
        if (type === "mobile") {
            sliderSettings = {
                effect: "",
            };
        } else {
            sliderSettings = {
                effect: "creative",
                creativeEffect: {
                    prev: {
                        shadow: false,
                        translate: ["0%", 0, -1],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                },
            };
        }
        if (homeSwiper.destroy && typeof homeSwiper.destroy === "function") {
            homeSwiper.destroy();
        }
        const sliderButtonsPrev = homeSlider.querySelectorAll(
            ".slider-button-prev"
        );
        const sliderButtonsNext = homeSlider.querySelectorAll(
            ".slider-button-next"
        );
        let slides = homeSlider.children[0].children;
        homeSwiper = new Swiper(homeSlider, {
            ...sliderSettings,
            slidePerView: 1,
            speed: 1200,
            speceBetween: 0,
            loop: false,
            grapCursor: false,
            simulateTouch: false,
            on: {
                init: function (elem) {
                    goToSlidePrev(sliderButtonsPrev);
                    goToSlideNext(sliderButtonsNext);
                    setPaginationNumbers(slides);
                    elem.el.swiper.slides[0].classList.add("active");
                },
                transitionEnd: function (elem) {
                    let activeIndex = homeSwiper.realIndex;
                    [...elem.el.swiper.slides].forEach((slide, index) => {
                        if (index === activeIndex) {
                            slide.classList.add("active");
                        } else {
                            slide.classList.remove("active");
                        }
                    });
                },
            },
        });
    }
    initSlider(sliderType);
    window.addEventListener("resize", () => {
        if (window.innerWidth < 991.98 && sliderType == "desktop") {
            sliderType = "mobile";
            initSlider(sliderType);
        } else if (window.innerWidth > 991.98 && sliderType == "mobile") {
            sliderType = "desktop";
            initSlider(sliderType);
        }
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
    const sliderControls = architectureSlider.querySelector(".slider-controls");
    architectureSwiper = new Swiper(architectureSlider, {
        slidePerView: 1,
        speed: 1000,
        effect: "fade",
        autoHeight: true,
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: sliderBtnNext,
            prevEl: sliderBtnPrev,
        },
        on: {
            init: function (elem) {
                setPaginationNumbers(slides);
                let architectureSlides = elem.el.swiper.slides;
                calcSlideImageHeight(architectureSlides, sliderControls);
            },
            resize: function (elem) {
                let architectureSlides = elem.el.swiper.slides;
                calcSlideImageHeight(architectureSlides, sliderControls);
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

function calcSlideImageHeight(slides, controls) {
    [...slides].forEach((slide) => {
        let slideImage = slide.querySelector(".architecure-slider__image");
        let slideImageHeight = slideImage.getBoundingClientRect().height;
        controls.style.height = `${slideImageHeight}px`;
    });
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
        speed: 1000,
        autoHeight: true,
        navigation: {
            prevEl: buttonPrev,
            nextEl: buttonNext,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            767.98: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });
}

const offerSlider = document.querySelector(".offers-slider__body");
if (offerSlider) {
    let offerSwiper = new Swiper(offerSlider, {
        freeMode: true,
        speed: 700,
        breakpoints: {
            300: {
                spaceBetween: 36,
                slidesPerView: "auto",
            },
            991.98: {
                spaceBetween: 0,
                slidesPerView: "auto",
            },
        },
    });
}

const dynamicSlider = document.querySelector(".dynamic-slider__body");
if (dynamicSlider) {
    let slides = dynamicSlider.children[0].children;
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
        breakpoints: {
            300: {
                spaceBetween: 20,
            },
            767.98: {
                spaceBetween: 30,
            },
        },
    });
}
// Плавающий курсор
let dynamicCursor = document.querySelector(".dynamic-cursor");
const galleryItems = document.querySelectorAll(".gallery-item");
if (galleryItems.length && dynamicCursor) {
    [...galleryItems].forEach((item) => {
        let image = item.querySelector(".gallery-item-image");
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

// flat preview slider

const flatPreviewItems = document.querySelectorAll(".flat-item");
[...flatPreviewItems].forEach((item) => {
    const flatSlider = item.querySelector(".swiper");
    if (flatSlider) {
        let children = flatSlider.children[0].children;
        const sliderButtonPrev = item.querySelector(".slider-button-prev");
        const sliderButtonNext = item.querySelector(".slider-button-next");
        const sliderPagination = item.querySelector(".slider-pagination");
        if (children.length <= 1) {
            sliderButtonPrev.remove();
            sliderButtonNext.remove();
            sliderPagination.remove();
        }
        let flatPreviewSwiper = new Swiper(flatSlider, {
            spaceBetween: 20,
            slidesPerView: 1,
            speed: 700,
            navigation: {
                prevEl: sliderButtonPrev,
                nextEl: sliderButtonNext,
            },
            pagination: {
                el: sliderPagination,
                type: "progressbar",
            },
        });
    }
});

// interior slider

const interiorSlider = document.querySelector(".interior-slider__body");
if (interiorSlider) {
    let parent = interiorSlider.closest(".interior");
    let sliderButtonPrev = parent.querySelector(".slider-button-prev");
    let sliderButtonNext = parent.querySelector(".slider-button-next");
    let interiorSwiper = new Swiper(interiorSlider, {
        freeMode: true,
        speed: 700,
        navigation: {
            prevEl: sliderButtonPrev,
            nextEl: sliderButtonNext,
        },
        breakpoints: {
            300: {
                spaceBetween: 20,
                slidesPerView: "auto",
            },
            576: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            767.98: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
        },
    });
}

const flatTabListSlider = document.querySelector(".flat-tabs__triggers");
if (flatTabListSlider) {
    let flatTabsSwiper = new Swiper(flatTabListSlider, {
        freeMode: true,
        slidesPerView: "auto",
        speed: 400,
        breakpoints: {
            300: {
                spaceBetween: 16,
            },
            767.98: {
                spaceBetween: 31,
            },
        },
    });
}
