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
        spaceBetween: 32,
        freeMode: true,
        slidesPerView: 3,
        speed: 700,
        navigation: {
            prevEl: sliderButtonPrev,
            nextEl: sliderButtonNext,
        },
    });
}
