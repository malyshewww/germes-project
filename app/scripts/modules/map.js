const placemarkArr = [
    // Большая покровская
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.323938, 44.003357],
        },
        properties: {
            hintContent: "ул. Большая Покровская",
            type: "pokrovskaya",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-pokrovskaya.svg",
            iconImageSize: [56, 56],
            iconImageOffset: [-14, -14],
        },
    },
    // Нижегородский кремль
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.328624, 44.002842],
        },
        properties: {
            hintContent: "Нижегородский кремль",
            type: "kremlin",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-kremlin.svg",
            iconImageSize: [56, 56],
            iconImageOffset: [-14, -14],
        },
    },
    // Исторические места 1
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.329507, 44.009957],
        },
        properties: {
            hintContent: "Дом Архитектора",
            type: "history",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-history.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Исторические места 2
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.323881, 43.990767],
        },
        properties: {
            hintContent: "Домик Каширина",
            type: "history",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-history.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Исторические места 3
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.322778, 44.018558],
        },
        properties: {
            hintContent: "Музей-квартира А.М. Горького",
            type: "history",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-history.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Спорт 1
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.318905, 44.007626],
        },
        properties: {
            hintContent: "Дхк Космос",
            type: "sport",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-sport.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Спорт 2
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.320743, 44.029601],
        },
        properties: {
            hintContent: "Gold's Fitness",
            type: "sport",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-sport.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Образование 1
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.327583, 44.01298],
        },
        properties: {
            hintContent:
                "Нижегородская государственная консерватория имени М. И. Глинки",
            type: "education",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-education.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Образование 2
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.326299, 44.024735],
        },
        properties: {
            hintContent:
                "НГТУ им. Р. Е. Алексеева, кафедра нанотехнологии и биотехнологии",
            type: "education",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-education.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Образование 3
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.326213, 44.007647],
        },
        properties: {
            hintContent: "НГПУ им. К. Минина, Факультет гуманитарных наук",
            type: "education",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-education.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Образование 4
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.321334, 44.011438],
        },
        properties: {
            hintContent: "МБОУ Лицей № 40",
            type: "education",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-education.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Здравоохранение 1
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.32383, 44.024288],
        },
        properties: {
            hintContent: "Ника Спринг",
            type: "health",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-health.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Здравоохранение 2
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.325331, 44.020483],
        },
        properties: {
            hintContent:
                "Центр восстановительной медицины и реабилитации для детей",
            type: "health",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-health.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
    // Магазины 1
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.322625, 44.005045],
        },
        properties: {
            hintContent: "Лобачевский Plaza",
            type: "shop",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-shop.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [50, 0],
        },
    },
    // Магазины 2
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [56.323843, 43.994924],
        },
        properties: {
            hintContent: "EUROSPAR",
            type: "shop",
        },
        options: {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./images/markers/mark-shop.svg",
            iconImageSize: [34, 34],
            iconImageOffset: [-14, -14],
        },
    },
];

if ($("#map").length) {
    ymaps.ready(function () {
        // Инициализация карты
        var myMap = new ymaps.Map(
            "map",
            {
                center: [56.322036, 44.005893],
                zoom: 16,
                controls: [],
            },
            {
                // searchControlProvider: "yandex#search",
            }
        );
        // Иконки на карте (которые могут менятья)
        window.myObjects = ymaps
            .geoQuery({
                type: "FeatureCollection",
                features: [
                    // Большая покровская
                    {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [56.323938, 44.003357],
                        },
                        properties: {
                            hintContent: "ул. Большая Покровская",
                            type: "pokrovskaya",
                        },
                        options: {
                            iconLayout: ``,
                            iconImageHref:
                                "./images/markers/mark-pokrovskaya.svg",
                            iconImageSize: [56, 56],
                            iconImageOffset: [-14, -14],
                        },
                    },
                    // Нижегородский кремль
                    {
                        type: "Feature",
                        geometry: {
                            type: "Point",
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
                            type: "Point",
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
                            type: "Point",
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
                            type: "Point",
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
                            type: "Point",
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
                            type: "Point",
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
                            type: "Point",
                            coordinates: [56.327583, 44.01298],
                        },
                        properties: {
                            hintContent:
                                "Нижегородская государственная консерватория имени М. И. Глинки",
                            type: "education",
                        },
                        options: {
                            iconLayout: "",
                            iconImageHref:
                                "./images/markers/mark-education.svg",
                            iconImageSize: [34, 34],
                            iconImageOffset: [-14, -14],
                        },
                    },
                    // Образование 2
                    {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [56.326299, 44.024735],
                        },
                        properties: {
                            hintContent:
                                "НГТУ им. Р. Е. Алексеева, кафедра нанотехнологии и биотехнологии",
                            type: "education",
                        },
                        options: {
                            iconLayout: "",
                            iconImageHref:
                                "./images/markers/mark-education.svg",
                            iconImageSize: [34, 34],
                            iconImageOffset: [-14, -14],
                        },
                    },
                    // Образование 3
                    {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [56.326213, 44.007647],
                        },
                        properties: {
                            hintContent:
                                "НГПУ им. К. Минина, Факультет гуманитарных наук",
                            type: "education",
                        },
                        options: {
                            iconLayout: "",
                            iconImageHref:
                                "./images/markers/mark-education.svg",
                            iconImageSize: [34, 34],
                            iconImageOffset: [-14, -14],
                        },
                    },
                    // Образование 4
                    {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [56.321334, 44.011438],
                        },
                        properties: {
                            hintContent: "МБОУ Лицей № 40",
                            type: "education",
                        },
                        options: {
                            iconLayout: "",
                            iconImageHref:
                                "./images/markers/mark-education.svg",
                            iconImageSize: [34, 34],
                            iconImageOffset: [-14, -14],
                        },
                    },
                    // Здравоохранение 1
                    {
                        type: "Feature",
                        geometry: {
                            type: "Point",
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
                            type: "Point",
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
                            type: "Point",
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
                            type: "Point",
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
                ],
            })
            .addToMap(myMap);

        // Добавить Основную иконку
        var mainIco1 = new ymaps.Placemark(
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
        myMap.geoObjects.add(mainIco1);
        [...placemarkArr].forEach((placemarkObj, placeMarkIndex) => {
            if (placemarkObj.properties.type != "jk") {
                var pointLayout = ymaps.templateLayoutFactory.createClass(
                    `<div class="placemark_layout_container" data-placemark="${placeMarkIndex}" data-placemark-type="${placemarkObj.properties.type}">
                        <div class="placemark_layout_text">${placemarkObj.properties.hintContent}</div>
                        <img src=${placemarkObj.options.iconImageHref}>
                    </div>`
                );
                var newStock = new ymaps.Placemark(
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
                newStock.events.add("click", function (e) {
                    // remove active style from placemark
                    myMap.setCenter(placemarkObj.geometry.coordinates, 16, {
                        duration: 700,
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
                    console.log(activePoint);
                    activePoint.classList.add("active");
                    activePoint.parentElement.parentElement.style.zIndex++;
                });
                myMap.geoObjects.add(newStock);
            }
            var tags = new ymaps.GeoQueryResult();
            // Фильтрация меток на карте
            $(".history__place").click(function () {
                console.log("click");
                if (!$(this).hasClass("active")) {
                    // Отобразить метки одной группы
                    $(".history__place").removeClass("active");
                    $(this).addClass("active");
                    var type = $(this).attr("data-type");
                    tags = myObjects.search('properties.type = "' + type + '"');
                    myObjects.removeFromMap(myMap);
                    if (type) tags.addToMap(myMap);
                } else {
                    // Отобразить все метки
                    $(this).removeClass("active");
                    myObjects.addToMap(myMap);
                }
            });
        });
        myMap.behaviors.disable("scrollZoom");

        //Убрать перетаскивание на адаптиве + Надпись: "Чтобы переместить карту..."
        if ($(window).width() < 1280) {
            myMap.behaviors.disable("drag");
            myMap.behaviors.disable("scrollZoom");

            var pane = $(".ymaps-2-1-78-events-pane");
            $(pane).text(
                "Чтобы переместить карту проведите по ней двумя пальцами"
            );
            $(pane).css({
                color: "#fff",
                "font-size": "22px",
                "font-family": "Arial, sans-serif",
                "box-sizing": "border-box",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "text-align": "center",
                "background-color": "rgba(0,0,0,0.45)",
                opacity: "0",
                transition: "0.4s",
                padding: "25px",
            });

            var map = document.getElementById(mapId);

            // Показать надпись
            ymaps.domEvent.manager.add(map, "touchmove", function () {
                $(pane).css("opacity", "1");
            });
            // Скрыть надпись
            ymaps.domEvent.manager.add(map, "touchend", function () {
                $(pane).css("opacity", "0");
            });
            ymaps.domEvent.manager.add(map, "multitouchmove", function () {
                $(pane).css("opacity", "0");
            });
        }
    });
}
const asidePlaces = document.querySelector(".history__places");
asidePlaces.addEventListener("mouseenter", () => {
    asidePlaces.classList.add("is-open");
});
asidePlaces.addEventListener("mouseleave", () => {
    setTimeout(() => {
        asidePlaces.classList.remove("is-open");
    }, 300);
});
