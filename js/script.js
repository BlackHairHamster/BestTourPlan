$(document).ready(function () {
	const mapActive = `
	<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0412755648717!2d98.29254741501143!3d7.890750807947032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sru!4v1596715680981!5m2!1sru!2sru"
        width="100%" height="213" style="border:0;" allowfullscreen="" aria-hidden="false"
		tabindex="0">
	</iframe>
	`;

	var source = document.body.innerHTML;
	var changeableMap = `<img src="img/map-preview.jpg" alt="map" class="map__preview">`;
	var changed = source.replace(changeableMap, mapActive);

	const mapPreview = $(".map__preview");
	mapPreview.on("mouseover", function () {
		document.body.innerHTML = changed;
	});
	mapPreview.on("click", function () {
		document.body.innerHTML = changed;
	});


	const buttonPrev = document.querySelector(".hotel-slider__button_prev");
	const buttonNext = document.querySelector(".hotel-slider__button_next");

	var hotelSlider = new Swiper(".hotel-slider", {
		// Optional parameters
		loop: true,

		// Navigation arrows
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		navigation: {
			nextEl: buttonNext,
			prevEl: buttonPrev,
		},

		// And if we need scrollbar
		scrollbar: {
			el: ".swiper-scrollbar",
		},
	});
	var reviewsSlider = new Swiper(".reviews-slider", {
		// Optional parameters
		loop: true,

		// Navigation arrows
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		navigation: {
			nextEl: ".reviews-slider__button_next",
			prevEl: ".reviews-slider__button_prev",
		},

		// And if we need scrollbar
		scrollbar: {
			el: ".swiper-scrollbar",
		},
	});

	// ymaps.ready(init);

	// function init() {
	// 	var myMap = new ymaps.Map("map", {
	// 		center: [7.890746, 98.294784],
	// 		zoom: 15,
	// 	});
	// 	var myGeoObject = new ymaps.GeoObject({
	// 		geometry: {
	// 			type: "Point",
	// 			coordinates: [7.890746, 98.294784],
	// 		},
	// 		// Свойства.
	// 		properties: {
	// 			// Контент метки.
	// 			iconContent: "DoubleTree by Hilton ",
	// 		},
	// 	}, {
	// 		// Опции.
	// 		// Иконка метки будет растягиваться под размер ее содержимого.
	// 		preset: "islands#governmentCircleIcon",
	// 	});

	// 	myMap.geoObjects.add(
	// 		new ymaps.Placemark(
	// 			[7.890747, 98.295131], {
	// 				balloonContent: "<strong>DoubleTree by Hilton Phucket Banthai Resort </strong>",
	// 				iconCaption: "DoubleTree by Hilton Phucket Banthai Resort",
	// 			}, {
	// 				preset: "islands#greenDotIconWithCaption",
	// 				iconColor: "red",
	// 			}
	// 		)
	// 	);
	// }

	const menuButton = $(".menu-button");
	menuButton.on("click", function () {
		$(".navbar-bottom").toggleClass("navbar-bottom_visible");
	});

	const modalButton = $('[data-toggle="modal"]');
	const modalOverlay = $(".modal__overlay");
	const modalDialog = $(".modal__dialog");
	const closeModalButton = $(".modal__close");
	$(document).keydown(function (esc) {
		if (esc.keyCode == 27) {
			closeModal(event);
		}
	});

	modalButton.on("click", openModal);
	closeModalButton.on("click", closeModal);
	modalOverlay.on("click", closeModal);

	function openModal() {
		const targetModal = $(this).attr("data-href");
		$(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
		$(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
	}

	function closeModal(event) {
		event.preventDefault();
		modalOverlay.removeClass("modal__overlay_visible");
		modalDialog.removeClass("modal__dialog_visible");
	}

	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				name: {
					required: "We need your full name",
					minlength: jQuery.validator.format("At least 2 characters required!"),
				},
				email: {
					required: "We need your email address",
					minlength: jQuery.validator.format("At least 8 characters required!"),
					email: "Your email address must be in the format of name@domain.com",
				},
				phone: {
					required: "We need your tel number",
					minlength: jQuery.validator.format("At least 10 characters required!"),
					phone: "Your tel number must be in the format of  8 *** *** ** **",
				},
			},
		});
	});
	$(".tel-number").mask("+7 (999) 999-99-99");

	AOS.init();


});