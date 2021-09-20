const bodyScroll = document.querySelector('body._custom');
if (bodyScroll && window.matchMedia('(min-width: 992px)').matches) {
	const bodyScrollItem = new SimpleBar(bodyScroll, {
		autoHide: false,
	});

	const forecastDitailItems = document.querySelectorAll('.item-forecasts-history-ditail');

	if (forecastDitailItems.length > 0) {
		const scrollbar = document.querySelector('.simplebar-vertical .simplebar-scrollbar');
		const instance = tippy(scrollbar, {
			placement: 'left',
			sticky: true,
		});
		bodyScrollItem.getScrollElement().addEventListener('scroll', function (e) {
			const centerX = document.documentElement.clientWidth / 2;
			const centerY = document.documentElement.clientHeight / 2;
			let day = "";
			forecastDitailItems.forEach(forecastDitailItem => {
				const forecastDitailItemTop = forecastDitailItem.getBoundingClientRect().top;
				if (centerY > forecastDitailItemTop && forecastDitailItemTop > 0) {
					day = forecastDitailItem.querySelector('.info-header-forecasts-history__date').innerHTML + ' января';
					instance.setContent(day);
					instance.enable();
					instance.show();
				}
			});
			if (!day) {
				instance.disable();
				instance.hide();
			}
		});
	}
}
//========================================================================================================================================================

const historyMonth = document.querySelector('.forecasts-history__items');
const historyDitail = document.querySelector('.forecasts-history-ditail');

if (historyMonth) historyMonth.addEventListener("click", historyMonthActions);
if (historyDitail) historyDitail.addEventListener("click", historyDitailActions);

function historyMonthActions(e) {
	const targetElement = e.target;
	if (targetElement.classList.contains('item-forecast-history') || targetElement.closest('.item-forecast-history')) {
		const historyMonthActive = historyMonth.querySelector('.item-forecast-history._active');
		if (historyMonthActive) historyMonthActive.classList.remove('_active');
		const historyMonthItem = targetElement.classList.contains('item-forecast-history') ? targetElement : targetElement.closest('.item-forecast-history');
		historyMonthItem.classList.toggle('_active');
		e.preventDefault();
	}
}
function historyDitailActions(e) {
	const targetElement = e.target;
	if (targetElement.classList.contains('item-forecasts-history-ditail__spoller') || targetElement.closest('.item-forecasts-history-ditail__spoller')) {
		const historyDitailItem = targetElement.closest('.item-forecasts-history-ditail');
		const historyDitailTable = historyDitailItem.querySelector('.item-forecasts-history-ditail__table');
		if (!historyDitailTable.classList.contains('_slide')) {
			const historyDitailButton = targetElement.classList.contains('item-forecasts-history-ditail__spoller') ? targetElement : targetElement.closest('.item-forecasts-history-ditail__spoller');
			historyDitailButton.classList.toggle('_active');
			_slideToggle(historyDitailTable);
		}
		e.preventDefault();
	}
}