if (document.querySelector('.user-main-header__button')) {
	document.querySelector('.user-main-header__button').addEventListener("click", function (e) {
		document.querySelector('.user-main-header__button').parentElement.classList.toggle('_active');
		e.preventDefault();
	});
}
// SEARCH
const searchHeader = document.querySelector('.search-header');
if (searchHeader) {
	const searchResults = document.querySelector('.search-results');
	const searchForm = document.querySelector('.search-header__form');
	const searchButton = document.querySelector('._search-button');
	searchForm.addEventListener("submit", search);
	searchButton.addEventListener("click", search);

	function search(e) {
		const currentTarget = e.currentTarget;
		if (searchButton.classList.contains('_search-open') || currentTarget.classList.contains('search-header__form')) {
			if (form_validate(searchForm) === 0) {
				searchButton.classList.remove('_search-open');
				searchButton.classList.add('_search-close');

				const actionsWidth = document.querySelector('.actions-header').offsetWidth + parseInt(window.getComputedStyle(document.querySelector('.main-header')).gap);
				document.querySelector('.search-header').style.cssText = `margin-right: -${actionsWidth}px`;

				// AJAX SEARCH
				//_slideDown(searchResults);

				setTimeout(() => {
					searchHeader.classList.add('_active');
				}, 250);
			}
			e.preventDefault();
		} else {
			searchHeader.classList.remove('_active');
			searchButton.classList.add('_search-open');
			searchButton.classList.remove('_search-close');

			document.querySelector('.search-header').style.cssText = ``;

			e.preventDefault();
		}
	}
}