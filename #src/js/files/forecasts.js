/*
if (document.querySelector('._forecasts')) {
	document.querySelector('._forecasts').addEventListener("click", forecastsActions);
	function forecastsActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('item-forecast__more') || targetElement.closest('.item-forecast__more')) {
			targetElement.classList.toggle('_active');
			_slideToggle(targetElement.closest('.item-forecast').querySelector('.item-forecast__results'))
			e.preventDefault();
		}
	}
}
*/
let _forecasts = document.querySelectorAll("._forecasts");
if (_forecasts.length > 0) {
	for (let index = 0; index < _forecasts.length; index++) {
    const _forecastsElement = _forecasts[index];
	 _forecastsElement.addEventListener("click", forecastsActions);
	 	function forecastsActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('item-forecast__more') || targetElement.closest('.item-forecast__more')) {
			targetElement.classList.toggle('_active');
			_slideToggle(targetElement.closest('.item-forecast').querySelector('.item-forecast__results'))
			e.preventDefault();
			if(targetElement.closest('.item-forecast').querySelector('.item-forecast__results_two')){
				_slideToggle(targetElement.closest('.item-forecast').querySelector('.item-forecast__results_two'))
				e.preventDefault();
			}
			
		}
	}
  }
}