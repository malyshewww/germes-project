let wrapper = document.querySelector(".wrapper");

const page = document.querySelector(".page");

if (page) {
    let pageSlider = new Swiper(page, {
        // Свои классы
        wrapperClass: "page__wrapper",
        slideClass: "page__screen",
        // Вертикальный слайдер
        direction: "vertical",
        // Количество слайдов для показа
        slidesPerView: 1,
        // Включаем параллакс
        // parallax: true,
        slidesPerGroup: 1,
        spaceBetween: 0,
        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить
            // только когда слайдер
            // в пределах вьюпорта
            onlyInViewport: true,
            // Включить\выключить
            // управление клавишами
            // pageUp, pageDown
            pageUpDown: true,
        },
        // Управление колесом мыши
        mousewheel: {
            sensitivity: 1,
            invert: false,
            eventsTarget: ".page__screen:not(.no-swipe)",
        },
        // mousewheel: true,
        // Отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,
        // Скорость
        speed: 800,
        // Обновить свайпер
        // при изменении элементов слайдера
        observer: true,
        // Обновить свайпер
        // при изменении родительских
        // элементов слайдера
        observeParents: true,
        // Обновить свайпер
        // при изменении дочерних
        // элементов слайда
        observeSlideChildren: true,
        // Отключаем автоинициализацию
        init: false,
        // События
        on: {
            // Событие инициализации
            init: function () {
                setScrollType();
                slideToTop();
            },
            slideChange: function () {
                slideToTop();
                // setScrollType();
            },
            resize: function () {
                setScrollType();
            },
        },
    });
    function setScrollType() {
        if (wrapper.classList.contains("_free")) {
            wrapper.classList.remove("_free");
            pageSlider.params.freeMode = false;
        }
        for (let index = 0; index < pageSlider.slides.length; index++) {
            const pageSlide = pageSlider.slides[index];
            const pageSlideContent =
                pageSlide.querySelector(".screen__content");
            if (pageSlideContent) {
                const pageSlideContentHeight =
                    pageSlideContent.getBoundingClientRect().height;
                if (pageSlideContentHeight > window.innerHeight) {
                    wrapper.classList.add("_free");
                    pageSlider.params.freeMode = true;
                    break;
                }
            }
        }
    }
    function slideToTop() {
        for (let index = 0; index < pageSlider.slides.length; index++) {
            const pageSlide = pageSlider.slides[index];
            const pageSlideContent =
                pageSlide.querySelector(".screen__content");
            if (pageSlideContent && index == 1) {
                pageSlider.params.freeMode = true;
            } else {
                pageSlider.params.freeMode = false;
            }
            console.log(pageSlider.params);
        }
    }
    // pageSlider.init();
}

// var mydiv = document.querySelector(".page");
// if (mydiv.addEventListener) {
//     mydiv.addEventListener("mousewheel", MouseWheelHandler, false);
//     mydiv.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// } else mydiv.attachEvent("onmousewheel", MouseWheelHandler);

// function MouseWheelHandler(e) {
//     // cross-browser wheel delta
//     var e = window.event || e; // old IE support
//     var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

//     if (delta == 1) {
//         pageSlider.slidePrev();
//         // pageSlider.mousewheel.enable();
//     }
//     if (delta == -1) {
//         // pageSlider.mousewheel.disable();
//         e.preventDefault();
//         e.stopPropagation();
//         return false;
//     }
//     return false;
// }

const homeSlider = document.querySelector(".home-slider__body");
let homeSwiper = {};
var sliderType = window.innerWidth <= 991.98 ? "mobile" : "desktop";
if (homeSlider) {
    function initSlider(type) {
        var sliderSettings = {};
        if (type === "mobile") {
            sliderSettings = {
                effect: "slide",
            };
        } else {
            sliderSettings = {
                effect: "creative",
                creativeEffect: {
                    prev: {
                        shadow: false,
                        translate: ["0%", 0, -5],
                    },
                    next: {
                        translate: ["100%", 0, 5],
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
            // ...sliderSettings,
            slidePerView: 1,
            speed: 1200,
            speceBetween: 0,
            loop: true,
            grapCursor: false,
            simulateTouch: true,
            autoplay: {
                delay: 20000,
                disableOnInteraction: false,
                reverseDirection: true,
            },
            on: {
                init: function (elem) {
                    goToSlidePrev(sliderButtonsPrev);
                    goToSlideNext(sliderButtonsNext);
                    // setPaginationNumbers(slides);
                    [...slides].forEach((slide) => {
                        let id = slide.dataset.id;
                        if (id == 1) {
                            slide.classList.add("active");
                        }
                    });
                },
                slideChangeTransitionEnd: function (elem) {
                    let activeIndex = homeSwiper.realIndex;
                    [...elem.el.swiper.slides].forEach((slide, index) => {
                        if (slide.classList.contains("swiper-slide-active")) {
                            slide.classList.add("active");
                        } else {
                            slide.classList.remove("active");
                        }
                    });
                },
                setTransition: function (elem) {
                    for (let t = 0; t < slides.length; t++) {
                        this.slides[t].style.transition = `${t}ms`;
                        let n =
                            this.slides[t].querySelectorAll(
                                ".item-home__bg-img"
                            );
                        for (let s = 0; s < n.length; s++) {
                            n[s].style.transition = `all ${s}ms ease 0s`;
                        }
                    }
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
        let flatTabs = item.closest(".flat-tabs__images");
        if (!flatTabs) {
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
        }
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
