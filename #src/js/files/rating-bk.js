
const linkRatingBkMenu = document.querySelector('.header-rating-bk__title');
const tableRatingBk = document.querySelector('.table-rating-bk');

if (linkRatingBkMenu) {
	linkRatingBkMenu.addEventListener("click", function (e) {
		document.querySelector('.header-rating-bk__menu').classList.toggle('_active');
	});
}

if (tableRatingBk) {
	tableRatingBk.addEventListener("click", tableRatingBkActions);

	function tableRatingBkActions(e) {
		const targetElement = e.target;
		if (targetElement.closest('.table-rating-bk__compare') || targetElement.classList.contains('table-rating-bk__compare')) {
			targetElementItem = targetElement.classList.contains('table-rating-bk__compare') ? targetElement : targetElement.closest('.table-rating-bk__compare');
			targetElementItem.classList.toggle('_active');
			if (document.querySelectorAll('.table-rating-bk__compare._active').length > 1) {
				document.querySelector('.table-rating-bk__show-compare').classList.add('_active');
			} else {
				document.querySelector('.table-rating-bk__show-compare').classList.remove('_active');
			}
		}
		if (targetElement.classList.contains('table-rating-bk__sort')) {
			if (targetElement.classList.contains('_active')) {
				if (targetElement.classList.contains('_active_up')) {
					targetElement.classList.remove('_active');
					targetElement.classList.remove('_active_up');
				} else {
					targetElement.classList.add('_active_up');
				}
			} else {
				targetElement.classList.add('_active');
			}

			//AJAX
			e.preventDefault();
		}
	}

	const tableRatingTtems = document.querySelectorAll('.table-rating-bk__item');
	tableRatingTtems.forEach(tableRatingTtem => {
		tableRatingTtem.addEventListener("mouseenter", function (e) {
			let tableRatingTtemPrevios, tableRatingTtemNext;
			for (let index = 0; index < 8; index++) {
				if (tableRatingTtemPrevios) {
					tableRatingTtemPrevios = tableRatingTtemPrevios.previousElementSibling;
				} else {
					tableRatingTtemPrevios = tableRatingTtem;
				}
				if (tableRatingTtemPrevios.classList.contains('table-rating-bk__item_first')) {
					tableRatingTtemPrevios.classList.add('_hover');
					break;
				}
			}
			for (let index = 0; index < 8; index++) {
				if (tableRatingTtemNext) {
					tableRatingTtemNext = tableRatingTtemNext.nextElementSibling;
				} else {
					tableRatingTtemNext = tableRatingTtem;
				}
				if (tableRatingTtemNext.classList.contains('table-rating-bk__item_last')) {
					tableRatingTtemNext.classList.add('_hover');
					break;
				}
			}
		});
		tableRatingTtem.addEventListener("mouseleave", function (e) {
			let tableRatingTtemPrevios, tableRatingTtemNext;
			for (let index = 0; index < 8; index++) {
				if (tableRatingTtemPrevios) {
					tableRatingTtemPrevios = tableRatingTtemPrevios.previousElementSibling;
				} else {
					tableRatingTtemPrevios = tableRatingTtem;
				}
				if (tableRatingTtemPrevios.classList.contains('table-rating-bk__item_first')) {
					tableRatingTtemPrevios.classList.remove('_hover');
					break;
				}
			}
			for (let index = 0; index < 8; index++) {
				if (tableRatingTtemNext) {
					tableRatingTtemNext = tableRatingTtemNext.nextElementSibling;
				} else {
					tableRatingTtemNext = tableRatingTtem;
				}
				if (tableRatingTtemNext.classList.contains('table-rating-bk__item_last')) {
					tableRatingTtemNext.classList.remove('_hover');
					break;
				}
			}
		});
	});
}

if (document.querySelector('.compare-bk-popup')) {
	function itemsCompareActions() {
		const itemsCompareBk = document.querySelectorAll('.item-compare-bk-popup');
		const compareBkValues = document.querySelectorAll('.content-compare-bk-popup__values');
		const compareBkDeleteItems = document.querySelectorAll('.item-compare-bk-popup__delete');

		compareBkValues.forEach((compareBkValue, index) => {
			compareBkValue.querySelectorAll('.content-compare-bk-popup__value').forEach((element, index) => {
				element.dataset.item = index;
			});
		});

		compareBkDeleteItems.forEach((compareBkDeleteItem, index) => {
			compareBkDeleteItem.closest('.item-compare-bk-popup').dataset.item = index;
			compareBkDeleteItem.addEventListener("click", function (e) {
				compareBkDeleteItem.closest('.item-compare-bk-popup').remove();
				compareBkValues.forEach(compareBkValue => {
					compareBkValue.querySelector('.content-compare-bk-popup__value[data-item="' + compareBkDeleteItem.closest('.item-compare-bk-popup').dataset.item + '"]').remove();
					if (document.querySelectorAll('.item-compare-bk-popup').length < 2) {
						popup_close(compareBkValue.closest('.popup'));
					}
				});
				e.preventDefault();
			});
		});

		itemsCompareBk.forEach(itemCompareBk => {
			itemCompareBk.addEventListener("mouseenter", function (e) {
				compareBkValues.forEach(compareBkValue => {
					compareBkValue.querySelector('.content-compare-bk-popup__value[data-item="' + itemCompareBk.dataset.item + '"]').classList.add('_active');
				});
			});
			itemCompareBk.addEventListener("mouseleave", function (e) {
				compareBkValues.forEach(compareBkValue => {
					compareBkValue.querySelector('.content-compare-bk-popup__value[data-item="' + itemCompareBk.dataset.item + '"]').classList.remove('_active');
				});
			});
		});
	}
	itemsCompareActions();
}

//========================================================================================================================================================

//========================================================================================================================================================

//========================================================================================================================================================
