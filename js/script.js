$(document).ready(function () {
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

	ymaps.ready(init);

	function init() {
		var myMap = new ymaps.Map("map", {
			center: [7.890746, 98.294784],
			zoom: 15,
		});
		var myGeoObject = new ymaps.GeoObject({
			geometry: {
				type: "Point",
				coordinates: [7.890746, 98.294784],
			},
			// Свойства.
			properties: {
				// Контент метки.
				iconContent: "DoubleTree by Hilton ",
			},
		}, {
			// Опции.
			// Иконка метки будет растягиваться под размер ее содержимого.
			preset: "islands#governmentCircleIcon",
		});

		myMap.geoObjects.add(
			new ymaps.Placemark(
				[7.890747, 98.295131], {
					balloonContent: "<strong>DoubleTree by Hilton Phucket Banthai Resort </strong>",
					iconCaption: "DoubleTree by Hilton Phucket Banthai Resort",
				}, {
					preset: "islands#greenDotIconWithCaption",
					iconColor: "red",
				}
			)
		);
	}

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

	// обработка форм
	// $(".modal__form").validate({
	// 	
	// 	messages: {
	// 		name: {
	// 			required: "Укажите свое имя",
	// 			minlength: "Имя должно содержать хотя бы 2 буквы"
	// 		},
	// 		email: {
	// 			required: "Укажите свой email",
	// 			minlength: "Почта должна содержать хотя бы 8 символов"
	// 		},
	// 		phone: {
	// 			required: "Укажите свой номер телефона",
	// 			minlength: "Телефон должен содержать хотя бы 11 цифр"
	// 		},
	// 	},
	// });

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
					email: "Your email address must be in the format of name@domain.com"
				},
				phone: {
					required: "We need your tel number",
					minlength: jQuery.validator.format("At least 10 characters required!"),
					phone: "Your tel number must be in the format of  8 *** *** ** **",
				},
			},
		});
	});
	$('.tel-number').mask('+7 (999) 999-99-99');

});