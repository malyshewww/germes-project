document.addEventListener("DOMContentLoaded", () => {
    // Yandex map
    const placemarkArr = [
        // {
        //     type: "Feature",
        //     geometry: {
        //         type: "Point",
        //         coordinates: [56.322036, 44.005893],
        //     },
        //     properties: {
        //         hintContent: "ЖК Гермес",
        //         type: "jk",
        //     },
        //     options: {
        //         iconLayout: "default#imageWithContent",
        //         iconImageHref: "./images/markers/mark-germes.svg",
        //         iconImageSize: [100, 116],
        //         iconImageOffset: [-15, -36],
        //     },
        // },
        // Большая покровская
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.323938, 44.003357],
            },
            properties: {
                hintContent: "ул. Большая Покровская",
                type: "pokrovskaya",
            },
            options: {
                iconLayout: ``,
                iconImageHref: "./images/markers/mark-pokrovskaya.svg",
                iconImageSize: [56, 56],
                iconImageOffset: [-14, -14],
            },
        },
        // Нижегородский кремль
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.328624, 44.002842],
            },
            properties: {
                hintContent: "Нижегородский кремль",
                type: "kremlin",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-kremlin.svg",
                iconImageSize: [56, 56],
                iconImageOffset: [-14, -14],
            },
        },
        // Исторические места 1
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.329507, 44.009957],
            },
            properties: {
                hintContent: "Дом Архитектора",
                type: "history",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-history.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Исторические места 2
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.323881, 43.990767],
            },
            properties: {
                hintContent: "Домик Каширина",
                type: "history",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-history.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Исторические места 3
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.322778, 44.018558],
            },
            properties: {
                hintContent: "Музей-квартира А.М. Горького",
                type: "history",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-history.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Спорт 1
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.318905, 44.007626],
            },
            properties: {
                hintContent: "Дхк Космос",
                type: "sport",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-sport.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Спорт 2
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.320743, 44.029601],
            },
            properties: {
                hintContent: "Gold's Fitness",
                type: "sport",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-sport.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Образование 1
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.327583, 44.01298],
            },
            properties: {
                hintContent:
                    "Нижегородская государственная консерватория имени М. И. Глинки",
                type: "education",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-education.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Образование 2
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.326299, 44.024735],
            },
            properties: {
                hintContent:
                    "НГТУ им. Р. Е. Алексеева, кафедра нанотехнологии и биотехнологии",
                type: "education",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-education.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Образование 3
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.326213, 44.007647],
            },
            properties: {
                hintContent: "НГПУ им. К. Минина, Факультет гуманитарных наук",
                type: "education",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-education.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Образование 4
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.321334, 44.011438],
            },
            properties: {
                hintContent: "МБОУ Лицей № 40",
                type: "education",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-education.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Здравоохранение 1
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.32383, 44.024288],
            },
            properties: {
                hintContent: "Ника Спринг",
                type: "health",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-health.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Здравоохранение 2
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.325331, 44.020483],
            },
            properties: {
                hintContent:
                    "Центр восстановительной медицины и реабилитации для детей",
                type: "health",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-health.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
        // Магазины 1
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.322625, 44.005045],
            },
            properties: {
                hintContent: "Лобачевский Plaza",
                type: "shop",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-shop.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [50, 0],
            },
        },
        // Магазины 2
        {
            type: "Feature",
            geometry: {
                type: "Circle",
                coordinates: [56.323843, 43.994924],
            },
            properties: {
                hintContent: "EUROSPAR",
                type: "shop",
            },
            options: {
                iconLayout: "",
                iconImageHref: "./images/markers/mark-shop.svg",
                iconImageSize: [34, 34],
                iconImageOffset: [-14, -14],
            },
        },
    ];
    function init() {
        if (document.getElementById("map")) {
            var myMap = new ymaps.Map(
                "map",
                {
                    center: [56.322036, 44.005893],
                    zoom: window.innerWidth > 991.98 ? 15 : 13,
                    controls: [],
                },
                {
                    suppressMapOpenBlock: true,
                }
            );
            let activePlace = "";
            // Фильтрация меток на карте
            const historyPlaces = document.querySelectorAll(".history__place");
            [...historyPlaces].forEach((place, indexPlace) => {
                place.addEventListener("click", (event) => {
                    const placeType = place.dataset.type;
                    [...historyPlaces].forEach((item) =>
                        item.classList.remove("active")
                    );
                    place.classList.add("active");
                    showPlace(placeType);
                });
            });
            function showPlace(place) {
                myMap.geoObjects.removeAll();
                let newPlacemarks = [...placemarkArr].filter((item) => {
                    return item.properties.type == place;
                });
                generatePlacemarks(newPlacemarks);
                [...newPlacemarks].forEach((obj) => {});
                // точка ЖК
                addMainPoint();
                activePlace = place;
            }
            // Иконки на карте (которые могут менятья)
            window.myObjects = ymaps
                .geoQuery({
                    type: "FeatureCollection",
                    features: [...placemarkArr],
                })
                .addToMap(myMap);
            function generatePlacemarks(arr) {
                [...arr].forEach((placemarkObj, placeMarkIndex) => {
                    var pointLayout = ymaps.templateLayoutFactory.createClass(
                        `<div class="placemark_layout_container" data-placemark="${placeMarkIndex}" data-placemark-type="${placemarkObj.properties.type}">
                                <div class="placemark_layout_text">${placemarkObj.properties.hintContent}</div>
                                <img src=${placemarkObj.options.iconImageHref}>
                            </div>`
                    );
                    let placemark = new ymaps.Placemark(
                        placemarkObj.geometry.coordinates,
                        {},
                        {
                            iconLayout: pointLayout,
                            iconImageHref: placemarkObj.options.iconImageHref,
                            iconImageSize: placemarkObj.options.iconImageSize,
                            iconImageOffset:
                                placemarkObj.options.iconImageOffset,
                            // Описываем фигуру активной области "Круг".
                            iconShape: {
                                type: "Circle",
                                // Круг описывается в виде центра и радиуса
                                coordinates: [0, 0],
                                radius:
                                    placeMarkIndex == 0 || placeMarkIndex == 1
                                        ? 56
                                        : 34,
                            },
                        }
                    );
                    const number = placeMarkIndex;
                    placemark.events.add("click", function (e) {
                        // remove active style from placemark
                        myMap.setCenter(placemarkObj.geometry.coordinates, 15, {
                            duration: 500,
                        });
                        document
                            .querySelectorAll(
                                ".placemark_layout_container.active"
                            )
                            .forEach((oldActivePoint) => {
                                oldActivePoint.classList.remove("active");
                                oldActivePoint.parentElement.parentElement.style
                                    .zIndex--;
                            });
                        const activePoint = document.querySelector(
                            `.placemark_layout_container[data-placemark="${number}"]`
                        );
                        activePoint.classList.add("active");
                        activePoint.parentElement.parentElement.style.zIndex++;
                    });
                    myMap.geoObjects.add(placemark);
                });
            }
            generatePlacemarks(placemarkArr);
            // точка ЖК
            function addMainPoint() {
                let mainPoint = new ymaps.Placemark(
                    [56.322036, 44.005893],
                    {},
                    {
                        iconLayout: "default#image",
                        iconImageHref:
                            window.innerWidth > 991.98
                                ? "./images/markers/mark-germes.svg"
                                : "./images/markers/mark-germes-mobile.svg",
                        iconImageSize:
                            window.innerWidth > 991.98 ? [100, 116] : [48, 56],
                        iconImageOffset:
                            window.innerWidth > 991.98 ? [36, -15] : [-30, -15],
                    }
                );
                myMap.geoObjects.add(mainPoint);
            }
            addMainPoint();
            myMap.behaviors.disable("scrollZoom");
        }
        if (window.innerWidth < 1200) {
            myMap.behaviors.disable("drag");
            let map = document.querySelector("#map");
            let version = map.firstChild
                .getAttribute("class")
                .replace("ymaps-", "")
                .replace("-map", "");
            let pane = document.querySelector(
                ".ymaps-" + version + "-events-pane"
            );
            pane.innerHTML =
                "Чтобы переместить карту проведите по ней двумя пальцами";
            pane.style.cssText =
                "height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 2500; color: #fff; font-size: 22px; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; text-align: center; background-color: rgba(0,0,0,0.45); opacity: 0; transition: opacity 0.45s; padding: 25px; box-sizing: border-box;";

            map.addEventListener("touchmove", function (e) {
                let touches = e.touches.length;
                if (touches > 1) {
                    pane.style.opacity = "0";
                } else {
                    pane.style.opacity = "1";
                }
            });
            map.addEventListener("touchend", function () {
                pane.style.opacity = "0";
            });
        }
    }
    const mapElem = document.querySelector("#map");
    if (mapElem) {
        let isLoaded = false;
        const loadMap = () => {
            // создаем и вставляем апи карт
            var script = document.createElement("script");
            script.src =
                "https://api-maps.yandex.ru/2.1/?apikey=9c2be2cf-d4b5-47bb-9b08-a17dea9f6734&lang=ru_RU";
            document.body.appendChild(script);
            isLoaded = true;
            //инициализируем карту
            script.onload = function () {
                ymaps.ready(init);
            };
            // script.oner ror = function(){};
        };
        if (mapElem.getBoundingClientRect().top < window.innerHeight) {
            loadMap();
        }
        window.addEventListener("scroll", function () {
            if (
                !isLoaded &&
                mapElem.getBoundingClientRect().top < window.innerHeight
            ) {
                loadMap();
            }
        });
    }
    const asidePlaces = document.querySelector(".history__places");
    if (asidePlaces) {
        asidePlaces.addEventListener("mouseenter", () => {
            asidePlaces.classList.add("is-open");
        });
        asidePlaces.addEventListener("mouseleave", () => {
            setTimeout(() => {
                asidePlaces.classList.remove("is-open");
            }, 300);
        });
    }

    // Sliders
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
            slidesPerColumn: 1,
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
            speed: 1200,
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
                if (pageSlideContent != null && index == 1) {
                    pageSlider.params.freeMode = true;
                } else {
                    pageSlider.params.freeMode = false;
                }
                console.log(pageSlider.params);
            }
        }
        // pageSlider.init();
    }
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
            if (
                homeSwiper.destroy &&
                typeof homeSwiper.destroy === "function"
            ) {
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
                slidesPerColumn: 1,
                speed: 1200,
                speceBetween: 0,
                loop: false,
                grapCursor: false,
                simulateTouch: true,
                watchSlidesProgress: true,
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: false,
                },
                on: {
                    init: function (elem) {
                        goToSlidePrev(sliderButtonsPrev, slides);
                        goToSlideNext(sliderButtonsNext, slides);
                        // setPaginationNumbers(slides);
                        [...slides].forEach((slide) => {
                            let id = slide.dataset.id;
                            if (id == 1) {
                                slide.classList.add("active");
                            }
                        });
                    },
                    slideChangeTransitionEnd: function (elem) {
                        [...elem.el.swiper.slides].forEach((slide, index) => {
                            if (
                                slide.classList.contains("swiper-slide-active")
                            ) {
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

    function goToSlidePrev(buttons, slides) {
        [...buttons].forEach((btn) => {
            btn.addEventListener("click", (event) => {
                homeSwiper.slidePrev();
            });
        });
    }
    function goToSlideNext(buttons, slides) {
        [...buttons].forEach((btn) => {
            btn.addEventListener("click", (event) => {
                homeSwiper.slideNext();
            });
        });
    }
    function setPaginationNumbers(arrSlides) {
        [...arrSlides].forEach((slide, index) => {
            const pagination = slide.querySelector(".slider-pagination");
            const current = pagination.querySelector(
                ".slider-pagination-current"
            );
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
    const architectureSlider = document.querySelector(
        ".architecure-slider__body"
    );
    if (architectureSlider) {
        let slides = architectureSlider.children[0].children;
        const sliderBtnPrev = architectureSlider.querySelector(
            ".slider-button-prev"
        );
        const sliderBtnNext = architectureSlider.querySelector(
            ".slider-button-next"
        );
        const sliderControls =
            architectureSlider.querySelector(".slider-controls");
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
            const sliderScrollbar = item.querySelector(".slider-scrollbar");
            if (children.length <= 1) {
                sliderButtonPrev.remove();
                sliderButtonNext.remove();
                sliderScrollbar.remove();
            }
            let flatPreviewSwiper = new Swiper(flatSlider, {
                spaceBetween: 20,
                slidesPerView: 1,
                speed: 700,
                navigation: {
                    prevEl: sliderButtonPrev,
                    nextEl: sliderButtonNext,
                },
                scrollbar: {
                    el: sliderScrollbar,
                    hide: false,
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

    // Accordeon
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

    // Filtre-checkboxes
    const flatBlocks = document.querySelectorAll(".flat-block");
    const flatBody = document.querySelector(".flat__body");
    if (flatBody) {
        let arrChecked = [];
        const paths = flatBody.querySelectorAll("path");
        const checkboxAll = flatBody.querySelector("input[value='all']");
        const checkboxes = flatBody.querySelectorAll(
            '.flat__checkboxes input[type="checkbox"]'
        );
        if (checkboxAll) {
            checkboxAll.addEventListener("change", checkAll);
        }
        function checkAll(event) {
            [...checkboxes].forEach((checkbox, index) => {
                checkbox.checked = checkboxAll.checked;
                checkbox.checked = event.target.checked ? true : false;
            });
            if (checkboxAll.checked) {
                [...paths].forEach((path) => {
                    path.classList.add("active");
                });
            } else {
                [...paths].forEach((path) => {
                    path.classList.remove("active");
                });
            }
        }
        [...checkboxes].forEach((item, index) => {
            item.addEventListener("change", (event) => {
                let checkBoxesChecked = flatBody.querySelectorAll(
                    '.flat__checkboxes input[type="checkbox"]:checked'
                );
                const { value, checked } = item;
                let currentPaths = flatBody.querySelectorAll(
                    `svg path[data-bedroom="${value}"]`
                );
                if (checked) {
                    arrChecked.push(index);
                    [...currentPaths].forEach((currentPath) =>
                        currentPath.classList.add("active")
                    );
                } else {
                    arrChecked.splice(arrChecked.indexOf(index), 1);
                    [...currentPaths].forEach((currentPath) =>
                        currentPath.classList.remove("active")
                    );
                }
                checkboxAll.checked =
                    checkBoxesChecked.length == checkboxes.length;
            });
        });
    }
    const flatView = document.querySelector(".flat__view");
    if (flatView) {
        flatView.addEventListener("click", (event) => {
            let target = event.target;
            if (target.classList.contains("view-front")) {
                target.classList.replace("view-front", "view-back");
                target.setAttribute("data-view", "back");
            } else {
                target.classList.replace("view-back", "view-front");
                target.setAttribute("data-view", "front");
            }
            let id = target.getAttribute("data-view");
            let currentBlock = document.querySelector(`[data-block="${id}"]`);
            if (flatBlocks.length > 0) {
                [...flatBlocks].forEach((el) => {
                    el.classList.remove("is-active");
                });
            }
            currentBlock.classList.add("is-active");
        });
    }

    // Range-sliders
    let groupItems = document.querySelectorAll(".filter-group");

    function rangeSliders() {
        [...groupItems].forEach((elem) => {
            const slider = elem.querySelector(".filter-group__slider");
            if (slider) {
                let inputMin = elem.querySelector(".min"); // Ищем input с меньшим значнием
                let inputMax = elem.querySelector(".max"); // Ищем input с большим значнием
                let minValue = parseInt(inputMin.dataset.min);
                let maxValue = parseInt(inputMax.dataset.max);
                let inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

                noUiSlider.create(slider, {
                    start: [minValue, maxValue],
                    step: 1,
                    connect: true,
                    range: {
                        min: Number(minValue),
                        max: Number(maxValue),
                    },
                });
                slider.noUiSlider.on("update", function (e) {
                    let min = Math.round(e[0]);
                    let max = Math.round(e[1]);
                    inputMin.innerText = min;
                    inputMax.innerText = max;
                });
            }
        });
    }
    rangeSliders();

    // Modals
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
    allModals.forEach((item) => {
        item.style.display = "block";
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

    // Scroll effects
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
    const mobile = window.matchMedia("(max-width: 991.98px)");
    const { innerHeight, innerWidth } = window;

    const lenisConfig = {
        duration: 1,
        // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        // smooth: true,
        // direction: "vertical",
        // gestureDirection: "vertical",
        // infinity: false,
        // mouseMultiplier: true,
        // smoothTouch: false,
        // touchMultiplier: 2,
        // smoothWheel: false,
    };
    const twoPageScreen = document.querySelector(".page__screen.no-swipe");
    // const lenis = new Lenis(lenisConfig);
    // function raf(time) {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    // }
    // lenis.on("scroll", ScrollTrigger.update);
    // gsap.ticker.add((time) => {
    //     lenis.raf(time * 1000);
    // });

    // gsap.ticker.lagSmoothing(0);
    // requestAnimationFrame(raf);

    // window.addEventListener("scroll", () => {
    //     const sectionNoSwiper = document.querySelector(
    //         ".page__screen.no-swipe"
    //     );
    //     if (window.scrollY > 0) {
    //         window.scrollTo({
    //             top: sectionNoSwiper.getBoundingClientRect().top,
    //             behavior: "smooth",
    //         });
    //     }
    // });
    function scrollEffects() {
        if (!mobile.matches) {
            // let smoother = ScrollSmoother.create({
            //     wrapper: "#wrapper",
            //     smooth: 2,
            //     effects: true,
            // });
            let sections = gsap.utils.toArray(".page__screen");
            let tlpage = gsap.timeline({ paused: false });
            function goToSection(i) {
                tlpage.to(window, {
                    scrollTo: {
                        y: i * innerHeight,
                        autoKill: false,
                    },
                    ease: "power3.easeInOut",
                    duration: 1,
                });
            }
            // sections.forEach((section, i) => {
            //     ScrollTrigger.create({
            //         trigger: section,
            //         onEnter: () => {
            //             goToSection(i);
            //         },
            //     });
            //     ScrollTrigger.create({
            //         trigger: section,
            //         onEnterBack: () => goToSection(i),
            //     });
            // });
            let historyMap = document.getElementById("map");
            let historyOverlay = document.querySelector(
                ".history__overlay img"
            );
            if (historyOverlay) {
                let tl = gsap.timeline(
                    {
                        // scale: 1,
                        // stager: 0.25,
                        // width: "100%",
                        scrollTrigger: {
                            trigger: "#history",
                            start: "top top",
                            pin: true,
                            // x: innerWidth / 2,
                            // y: innerHeight / 2,
                            scrub: 1,
                            ease: "Power3.easeOut",
                        },
                        onStart: function () {
                            // console.log("animation start");
                            historyMap.style.pointerEvents = "none";
                        },
                        onComplete: function () {
                            // console.log("animation end");
                            historyMap.style.pointerEvents = "all";
                        },
                        onReverseComplete: function () {
                            // console.log("reverse animation end");
                            historyMap.style.pointerEvents = "all";
                        },
                        onUpdate: function () {
                            // console.log("done one tick animation");
                            historyMap.style.pointerEvents = "none";
                        },
                    },
                    -0.5
                );
                tl.to(historyOverlay, 0.1, {
                    left: "50%",
                    top: "50%",
                    xPercent: -50,
                    yPercent: -50,
                });
                tl.to(historyOverlay, 0.1, {
                    borderRadius: "50% 50%",
                    width: 600,
                    height: 600,
                });
                tl.to(historyOverlay, 0.1, {
                    scale: 0,
                });
                // tl.reversed();
            }
            const individualSmallImage = document.querySelector(
                ".individual__image--small"
            );
            if (individualSmallImage) {
                gsap.fromTo(
                    individualSmallImage,
                    { y: 0, stagger: 0.5 },
                    {
                        y: -300,
                        scrollTrigger: {
                            trigger: "#individual",
                            scrub: true,
                        },
                    }
                );
            }
            const homeSection = document.querySelector(".home");
            if (homeSection) {
                gsap.fromTo(
                    homeSection,
                    { opacity: 1 },
                    {
                        opacity: 0,
                        // yPercent: 100,
                        scrollTrigger: {
                            trigger: homeSection,
                            start: "top",
                            // end: "820",
                            scrub: true,
                        },
                    }
                );
            }
            gsap.fromTo(
                ".item-home__bg-img",
                2,
                { scale: 1.5, duration: 2 },
                { scale: 1 }
            );
            const homeOverlay = document.querySelector(".home__overlay");
            if (homeOverlay) {
                gsap.fromTo(
                    homeOverlay,
                    1,
                    { yPercent: 0 },
                    { yPercent: -100 }
                );
            }
            const indexHeader = document.querySelector("#header");
            // if (indexHeader) {
            //     gsap.to(indexHeader, {
            //         y: 0,
            //         duration: 0.3,
            //         delay: 1,
            //         ease: "power4.out",
            //     });
            // }
            const uniqueTitle = document.querySelector(
                ".unique .heading-block__title"
            );
            // if (uniqueTitle) {
            //     gsap.fromTo(
            //         uniqueTitle,
            //         { xPercent: -30, stagger: 0.1, opacity: 0.5 },
            //         {
            //             xPercent: 0,
            //             opacity: 1,
            //             scrollTrigger: {
            //                 trigger: ".unique",
            //                 scrub: true,
            //             },
            //         }
            //     );
            // }
        } else {
            return false;
        }
    }
    scrollEffects();

    // $(document).ready(function () {
    //     $("#pagepiling").pagepiling({
    //         menu: null,
    //         direction: "vertical",
    //         verticalCentered: false,
    //         scrollingSpeed: 900,
    //         css3: false,
    //         navigation: {},
    //         normalScrollElements: "#section-second",
    //         // normalScrollElementTouchThreshold: 5,
    //         // touchSensitivity: 5,
    //         // keyboardScrolling: true,
    //         sectionSelector: ".section",
    //         animateAnchor: false,
    //         afterRender: function () {
    //             scrollEffects();
    //         },
    //     });
    // });

    // window.addEventListener("resize", () => {
    //     scrollEffects();
    // });

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

    // Кнопка назад
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
                const current = document.querySelector(
                    ".unique__tab.is-active"
                );
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
                    target.style.setProperty(
                        "--width",
                        `${divScrollCoef * 100}%`
                    );
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
                // headerDuplicate?.classList.add("hidden");
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
    let currScroll = window.scrollY;
    let isHidden = false;
    document.addEventListener("scroll", () => {
        if (currScroll <= window.scrollY && window.scrollY > 0) {
            if (!isHidden) {
                headerDuplicate?.classList.add("hidden");
                isHidden = true;
            }
        } else {
            if (isHidden) {
                headerDuplicate?.classList.remove("hidden");
                isHidden = false;
            }
        }
        currScroll = window.scrollY;
    });

    // Tooltips
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
                    const tooltipNumber =
                        tooltip.querySelector(".tooltip__number");
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
            item.addEventListener("mousemove", (e) => {
                tooltip.style.position = "fixed";
                tooltip.style.left = `${e.clientX}px`;
                tooltip.style.top = `${e.clientY + 20}px`;
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
                        const tooltipBody =
                            tooltip.querySelector(".tooltip__body");
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

    // Табы
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

    // Переключение схемы парковок
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

    // Скролл до якоря
    gsap.utils.toArray(".menu-header__anchor a").forEach((a) => {
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
    gsap.utils.toArray(".item-home__link").forEach((a) => {
        a.addEventListener("click", function (e) {
            e.preventDefault();
            gsap.to(window, {
                duration: 1,
                scrollTo: e.target.getAttribute("href"),
            });
        });
    });

    // tlMenu.to(headerMenu, 0.2, {
    //     x: 0,
    //     duration: 0.5,
    // });

    // tlMenu.to(overlay, 0.8, {
    //     duration: 1,
    //     opacity: 1,
    //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    // });
    // tlMenu.to(
    //     allMenuLinks,
    //     1.5,
    //     {
    //         duration: 1,
    //         top: 0,
    //         opacity: 1,
    //         stagger: 0.25,
    //         ease: "power3.in",
    //     },
    //     "-=1"
    // );

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
                lenis.stop();
                document.documentElement.scrollBehavior = "auto";
            });
        });
    }
    if (headerBurgerClose) {
        headerBurgerClose.addEventListener("click", (e) => {
            headerMenu.classList.remove("is-active");
            overlay.classList.remove("is-active");
            document.body.classList.remove("lock");
            lenis.start();
            document.documentElement.scrollBehavior = "smooth";
        });
    }

    const changeNav = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                [
                    ...document.querySelectorAll(
                        ".menu-header__anchor a.active"
                    ),
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

    // Высчитвание паддинга для футера при фиксированных кнопках снизу
    function setPaddingBottomFooter() {
        if (window.innerWidth < 991.98) {
            const filterBtn = document.querySelector(".btn-filter");
            const footerBottom = document.querySelector(".footer__bottom");
            const flatMobile = document.querySelector(".flat-mobile");
            if (filterBtn && footerBottom) {
                const filterBtnHeight =
                    filterBtn.getBoundingClientRect().height;
                footerBottom.style.paddingBottom = `${filterBtnHeight + 20}px`;
            }
            if (flatMobile && footerBottom) {
                const flatMobileHeight =
                    flatMobile.getBoundingClientRect().height;
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
                    phone.value =
                        code + " " + phone.value.replace(code + " ", "");
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
    // Добавление атрибутов для path на странице парковок
    function setAttributeParkingPath() {
        const parkingPaths = document.querySelectorAll(
            ".parking__schemes path"
        );
        [...parkingPaths].forEach((path) => {
            let status = path.dataset.status;
            let className = path.className;
            if (!path.classList.contains("sold") || status !== "sold") {
                path.setAttribute("data-modal-button", "modal-place");
            } else {
                return;
            }
        });
    }
    setAttributeParkingPath();
});
