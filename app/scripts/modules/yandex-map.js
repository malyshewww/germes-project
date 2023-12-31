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
                        iconImageOffset: placemarkObj.options.iconImageOffset,
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
                        .querySelectorAll(".placemark_layout_container.active")
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
                [56.322155, 44.003839],
                {},
                {
                    iconLayout: "default#image",
                    iconImageHref:
                        window.innerWidth > 991.98
                            ? "./images/markers/mark-germes.svg"
                            : "./images/markers/mark-germes-mobile.svg",
                    iconImageSize:
                        window.innerWidth > 991.98 ? [100, 116] : [48, 56],
                    iconImageOffset: [15, -36],
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
        let pane = document.querySelector(".ymaps-" + version + "-events-pane");
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
