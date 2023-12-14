if($("#map").length){
	ymaps.ready(function(){

		// Инициализация карты
		var myMap = new ymaps.Map('map', {
			zoom: 15,
			center: [56.24022141641885,43.86654052645872],
			// Первое число: по вертикали (больше = выше)
			// Второе число: по горизонтали (больше = правее)
			controls: [] // Удалить элементы управления картой
		}, {
			searchControlProvider: 'yandex#search'
		});


		var tags = new ymaps.GeoQueryResult();

		// Фильтрация меток на карте
		$(".history__place").click(function(){

			if(!$(this).hasClass("active")){

				// Отобразить метки одной группы
				$(".history__place").removeClass("active");
				$(this).addClass("active");
				var type = $(this).attr("data-type");
			
				tags = myObjects.search('properties.type = "'+type+'"');

				myObjects.removeFromMap(myMap);
				tags.addToMap(myMap);

			}else{

				// Отобразить все метки
				$(this).removeClass("active");
				myObjects.addToMap(myMap);
			};
		});



		// Иконки на карте (которые могут менятья)
		window.myObjects = ymaps.geoQuery({
			type: "FeatureCollection",
			features:[

				// Транспорт 1
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.2399710805265,43.86444223899406],
					},
					properties:{
						hintContent: 'Остановка общественного транспорта',
						type: "transport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/train.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Транспорт 2
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.241570370686354,43.86403320211927],
					},
					properties:{
						hintContent: 'Остановка общественного транспорта',
						type: "transport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/train.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Транспорт 3
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.242486150830224,43.86461986980208],
					},
					properties:{
						hintContent: 'Остановка общественного транспорта',
						type: "transport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/train.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Транспорт 4
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24404650484436,43.8689838238693],
					},
					properties:{
						hintContent: 'Остановка общественного транспорта',
						type: "transport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/train.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Транспорт 5
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24744969086713,43.87638209677024],
					},
					properties:{
						hintContent: 'Станция метро "Кировская"',
						type: "transport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/train.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Транспорт 6
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24474658817683,43.867331734360384],
					},
					properties:{
						hintContent: 'Остановка общественного транспорта',
						type: "transport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/train.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Транспорт 7
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.242104377338094,43.858028492392236],
					},
					properties:{
						hintContent: 'Станция метро "Парк культуры"',
						type: "transport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/train.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Транспорт 8
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.23887216670542,43.86200084394331],
					},
					properties:{
						hintContent: 'Остановка общественного транспорта',
						type: "transport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/train.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Магазин 1
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.239541334459425,43.863910576761896],
					},
					properties:{
						hintContent: 'ТЦ Парк Авеню',
						type: "shop"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/shop.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Магазин 2
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24246258079216,43.86630191097811],
					},
					properties:{
						hintContent: 'ТЦ Автозаводец',
						type: "shop"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/shop.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Магазин 3
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24321532282278,43.86501445065096],
					},
					properties:{
						hintContent: 'Автозаводский универмаг',
						type: "shop"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/shop.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Школа 1
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.2369270808905,43.860615627866544],
					},
					properties:{
						hintContent: 'Школа №169',
						type: "school"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/school.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Школа 2
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.243528031498855,43.850967384374385],
					},
					properties:{
						hintContent: 'Школа №126',
						type: "school"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/school.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Развлечение 1
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.23964715209543,43.85408125127766],
					},
					properties:{
						hintContent: 'Автозаводский парк',
						type: "entertainment"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/park.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Развлечение 2
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24047761844509,43.86133234093042],
					},
					properties:{
						hintContent: 'ДК ГАЗ',
						type: "entertainment"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/park.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Развлечение 3
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24123656701341,43.85936896393154],
					},
					properties:{
						hintContent: 'Кинотеатр Империя Грёз',
						type: "entertainment"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/park.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Развлечение 4
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24638060859548,43.87109222417222],
					},
					properties:{
						hintContent: 'Парк Славы',
						type: "entertainment"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/park.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Детский сад 1
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.237204909247296,43.862181040335024],
					},
					properties:{
						hintContent: 'Детский сад №341',
						type: "kindergarten"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/teddy-bear.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Детский сад 2
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.23819803380244,43.864323882930464],
					},
					properties:{
						hintContent: 'Детский сад №61',
						type: "kindergarten"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/teddy-bear.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Детский сад 3
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.23355975889693,43.87591907250185],
					},
					properties:{
						hintContent: 'Детский сад №118 Дружба',
						type: "kindergarten"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/teddy-bear.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Детский сад 4
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.23669564094982,43.8716691515427],
					},
					properties:{
						hintContent: 'Детский сад №80 Маленькая страна',
						type: "kindergarten"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/teddy-bear.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Детский сад 5
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.2440109868797,43.8579204933301],
					},
					properties:{
						hintContent: 'Детский сад №198',
						type: "kindergarten"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/teddy-bear.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Детский сад 6
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24440302595634,43.85394545957005],
					},
					properties:{
						hintContent: 'Детский сад №96 Лучик',
						type: "kindergarten"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/teddy-bear.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Медицинское учреждение 1
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24461061834954,43.86340829297456],
					},
					properties:{
						hintContent: 'Гинекологическая больница №21',
						type: "medicine"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/cardiology.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Медицинское учреждение 2
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24398933127038,43.860983576025106],
					},
					properties:{
						hintContent: 'Детская больница №25',
						type: "medicine"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/cardiology.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Медицинское учреждение 3
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.244335819543736,43.85585519238864],
					},
					properties:{
						hintContent: 'Городская больница №37',
						type: "medicine"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/cardiology.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Спортивные объекты 1
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24208125438804,43.86665830080863],
					},
					properties:{
						hintContent: 'Фитнес клуб "ФизКульт"',
						type: "sport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/gym.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Спортивные объекты 2
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24207154621136,43.86197784607764],
					},
					properties:{
						hintContent: 'Фитнес клуб "Режим"',
						type: "sport"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/gym.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Кафе 1
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.2393936628303,43.86507891073547],
					},
					properties:{
						hintContent: 'Макдоналдс',
						type: "cafe"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/cafe.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Кафе 2
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.239873073882784,43.86605523481688],
					},
					properties:{
						hintContent: 'Суши бар "Самурай"',
						type: "cafe"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/cafe.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Кафе 3
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.24151978958295,43.86717908039412],
					},
					properties:{
						hintContent: 'Кафе "Марко де Лука"',
						type: "cafe"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/cafe.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},

				// Кафе 4
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [56.242277462724715,43.86011927301994],
					},
					properties:{
						hintContent: 'Ресторан "Союз"',
						type: "cafe"
					},
					options:{
						iconLayout: 'default#imageWithContent',
						iconImageHref: '/themes/kaskad/img/location/cafe.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-14, -14]
					}
				},
			]
		}).addToMap(myMap);




		// Добавить Основную иконку
		var mainIco1 = new ymaps.Placemark([56.24191833716708,43.87038739250882], {
			hintContent: 'ЖК Каскад на Автозаводе',
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/themes/kaskad/img/location/main.png',
			iconImageSize: [46, 54],
			iconImageOffset: [-23, -54]
		});
		myMap.geoObjects.add(mainIco1);


		//Убрать перетаскивание на адаптиве + Надпись: "Чтобы переместить карту..."
		if($(window).width() < 1280){
			myMap.behaviors.disable('drag');
			myMap.behaviors.disable('scrollZoom');

			var pane = $(".ymaps-2-1-78-events-pane");
			$(pane).text("Чтобы переместить карту проведите по ней двумя пальцами");
			$(pane).css({
				"color": "#fff",
				"font-size": "22px",
				"font-family": "Arial, sans-serif",
				"box-sizing": "border-box",
				"display": "flex",
				"align-items": "center",
				"justify-content": "center",
				"text-align": "center",
				"background-color": "rgba(0,0,0,0.45)",
				"opacity": "0",
				"transition": "0.4s",
				"padding": "25px",
			});

			var map = document.getElementById(mapId);

			// Показать надпись
			ymaps.domEvent.manager.add(map, 'touchmove', function(){
				$(pane).css("opacity", "1");
			});
			// Скрыть надпись
			ymaps.domEvent.manager.add(map, "touchend", function(){
				$(pane).css("opacity", "0");
			});
			ymaps.domEvent.manager.add(map, "multitouchmove", function(){
				$(pane).css("opacity", "0");
			});
		};


	});
};