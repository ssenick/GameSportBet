tippy('[data-tippy-content]', {
	allowHTML: true,
	//interactive: true,
	maxWidth: 300,
	appendTo: () => document.body,
	//trigger: 'click',
});
//========================================================================================================================================================

//========================================================================================================================================================
document.addEventListener("click", documentActions);
function documentActions(e) {
	const targetElement = e.target;
	if (!targetElement.closest('.user-main-header') && document.querySelector('.user-main-header._active')) {
		document.querySelector('.user-main-header').classList.remove('_active');
	}
	if (!targetElement.closest('.search-header') && document.querySelector('.search-header._active')) {
		document.querySelector('.search-header').classList.remove('_active');
		document.querySelector('._search-button').classList.remove('_search-close');
		document.querySelector('._search-button').classList.add('_search-open');
		document.querySelector('.search-header').style.cssText = ``;
	}
	if (targetElement.classList.contains('_filter-colored__item')) {
		targetElement.classList.toggle('_active');
		// AJAX FILTER
		e.preventDefault();
	}
	if (document.querySelector('.header-rating-bk__title') && !targetElement.classList.contains('header-rating-bk__title') && !targetElement.closest('.header-rating-bk__menu')) {
		document.querySelector('.header-rating-bk__menu').classList.remove('_active');
	}

	if (targetElement.closest('.select-calendar__value_month') || targetElement.classList.contains('select-calendar__value_month')) {
		const calendar = targetElement.closest('.calendar');
		const calendarTable = calendar.querySelector('.calendar__table');
		const calendarMonth = calendar.querySelector('.calendar__month');
		const selectItems = calendar.querySelectorAll('.select-calendar__item');
		_slideUp(selectItems[0]);
		_slideDown(selectItems[1]);
		_slideUp(calendarTable);
		_slideDown(calendarMonth);
	}
	if (targetElement.closest('.select-calendar__value_year') || targetElement.classList.contains('select-calendar__value_year')) {
		const calendar = targetElement.closest('.calendar');
		const calendarYear = calendar.querySelector('.calendar__year');
		const calendarMonth = calendar.querySelector('.calendar__month');
		const selectItems = calendar.querySelectorAll('.select-calendar__item');
		_slideUp(selectItems[1]);
		_slideUp(calendarMonth);
		_slideDown(calendarYear);
	}
	if (!targetElement.closest('.input_calendar')) {
		_removeClasses(document.querySelectorAll('._calendar'), '_calendar');
	}

}
//========================================================================================================================================================

const gridTables = document.querySelectorAll('._grid-table');
if (gridTables.length > 0) {
	gridTables.forEach(gridTable => {
		const gridTablesItems = gridTable.children;
		const counterColumns = gridTable.dataset.rows;
		if (gridTablesItems.length > 0) {
			gridTablesItems.forEach((gridTablesItem, index) => {
				if (gridTablesItem.classList.contains('_grid-table__start')) {
					setHoverToRow(index);
				}
			});
			function setHoverToRow(curentIndex) {
				const columns = curentIndex + Number(counterColumns);
				for (let index = curentIndex; index < columns; index++) {
					const element = gridTablesItems[index];
					element.addEventListener("mouseenter", function (e) {
						for (let index = curentIndex; index < columns; index++) {
							const el = gridTablesItems[index];
							el.classList.add('_hover');
						}
					});
					element.addEventListener("mouseleave", function (e) {
						for (let index = curentIndex; index < columns; index++) {
							const el = gridTablesItems[index];
							el.classList.remove('_hover');
						}
					});
				}
			}
		}
	});
}
