// account-settings.html
const loginOptionsItems = document.querySelector('.login-options__items');

if (loginOptionsItems) {
  loginOptionsItems.addEventListener('click', loginOptionsItemsActions);
  function loginOptionsItemsActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.login-options__compare') || targetElement.classList.contains('login-options__compare')) {
      targetElementItem = targetElement.classList.contains('login-options__compare')
        ? targetElement
        : targetElement.closest('.login-options__compare');
      targetElementItem.classList.toggle('_active');
    }
  }
}
//========================================================================================================================================================
// payment-data.html
const newPropsCardsButtons = document.querySelectorAll('._payment-method-buttons');
if (newPropsCardsButtons) {
  for (let index = 0; index < newPropsCardsButtons.length; index++) {
    const elementButtons = newPropsCardsButtons[index];
    elementButtons.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.classList.contains('payment-method-button') || targetElement.closest('.payment-method-button')) {
        const newPropsCardsButtonsActive = elementButtons.querySelector('.payment-method-button._active');
        if (newPropsCardsButtonsActive) newPropsCardsButtonsActive.classList.remove('_active');
        const newPropsCardsButtonsItem = targetElement.classList.contains('payment-method-button')
          ? targetElement
          : targetElement.closest('.payment-method-button');
        newPropsCardsButtonsItem.classList.toggle('_active');
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================

//========================================================================================================================================================
//event-vip.html
const mapsTbdItems = document.querySelectorAll('.maps-tbd-items');
if (mapsTbdItems) {
  for (let index = 0; index < mapsTbdItems.length; index++) {
    const itemMapsTbd = mapsTbdItems[index];
    itemMapsTbd.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.classList.contains('item-maps-tbd') || targetElement.closest('.item-maps-tbd')) {
        const itemMapsTbdActive = itemMapsTbd.querySelector('.item-maps-tbd._active');
        if (itemMapsTbdActive) {
          itemMapsTbdActive.classList.remove('_active');
          const itemMapsTbdItem = targetElement.classList.contains('item-maps-tbd') ? targetElement : targetElement.closest('.item-maps-tbd');
          itemMapsTbdItem.classList.toggle('_active');
          e.preventDefault();
        }
      }
    });
  }
}
//========================================================================================================================================================
let _maps = document.querySelectorAll('._maps');
const mapTbdBody = document.querySelector('.map-tbd__body');
if (_maps.length > 0) {
  for (let index = 0; index < _maps.length; index++) {
    const _mapsElement = _maps[index];
    _mapsElement.addEventListener('click', mapsActions);
  }
}

//mapTbdBody.querySelectorAll('._slide')
function mapsActions(e) {
  const targetElement = e.target;
  const targetBlock = targetElement.closest('._maps');
  console.log(targetBlock);
  if (!targetBlock.querySelectorAll('._slide').length) {
    if (targetElement.classList.contains('map-tbd__title') || targetElement.closest('.map-tbd__title')) {
      targetElement.closest('.map-tbd__header').classList.toggle('_active');
      _slideToggle(targetElement.closest('.map-tbd').querySelector('.map-tbd__body'));
      e.preventDefault();
    }
  }
}

//========================================================================================================================================================
const tablesMapTbdBody = document.querySelectorAll('.tables-map-tbd__body');
if (tablesMapTbdBody) {
  for (let index = 0; index < tablesMapTbdBody.length; index++) {
    const tableMapTbdBody = tablesMapTbdBody[index];
    tableMapTbdBody.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.classList.contains('tables-map-tbd__item') || targetElement.closest('.tables-map-tbd__item')) {
        const tableMapTbdBodyActive = tableMapTbdBody.querySelector('.tables-map-tbd__item.tables-map-tbd__item_domainant');
        if (tableMapTbdBodyActive) tableMapTbdBodyActive.classList.remove('tables-map-tbd__item_domainant');

        const tableMapTbdBodyItem = targetElement.classList.contains('tables-map-tbd__item')
          ? targetElement
          : targetElement.closest('.tables-map-tbd__item');
        tableMapTbdBodyItem.classList.toggle('tables-map-tbd__item_domainant');
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================
//popup black-analitycs

const counterInputs = document.querySelectorAll('._counter-input');
if (counterInputs.length > 0) {
  counterInputs.forEach((counterInput) => {
    counterInput.addEventListener('keyup', function (e) {
      const inputValue = counterInput.value.length;
      const inputValueSpan = counterInput.closest('.input').querySelector('._counter-value');
      const inputValueSpanValue = counterInput.getAttribute('maxlength');
      const inputValueResults = inputValueSpanValue - inputValue;
      inputValueSpan.innerHTML = inputValueResults;
    });
  });
}
//========================================================================================================================================================
//
const teamPlayOffMachs = document.querySelectorAll('.team-play-off-mach');

if (teamPlayOffMachs.length > 0) {
  teamPlayOffMachs.forEach((teamPlayOffMach) => {
    teamPlayOffMach.addEventListener('mouseover', function (e) {
      const targetElement = e.target;
      let currentId = targetElement.getAttribute('data-id');
      const allTeams = document.querySelectorAll('.main-play-off__wrapper *[data-id="' + currentId + '"]');
      function addHover() {
        for (let index = 0; index < allTeams.length; index++) {
          const element = allTeams[index];
          if (!element.classList.contains('_hover')) {
            element.classList.add('_hover');
            if (element.classList.contains('team-play-off-mach_win')) {
              element.closest('.teams-play-off-mach').classList.add('_hover');
            }
          }
        }
      }
      if (
        (targetElement.classList.contains('team-play-off-mach') && targetElement.classList.contains('team-play-off-mach_win')) ||
        (targetElement.closest('.team-play-off-mach') && targetElement.closest('.team-play-off-mach').classList.contains('team-play-off-mach_win'))
      ) {
        teamPlayOffMach.closest('.teams-play-off-mach').classList.add('_hover');
        teamPlayOffMach.classList.add('_hover');

        addHover();
      } else if (
        (targetElement.classList.contains('team-play-off-mach') && targetElement.classList.contains('team-play-off-mach_lose')) ||
        (targetElement.closest('.team-play-off-mach') && targetElement.closest('.team-play-off-mach').classList.contains('team-play-off-mach_lose'))
      ) {
        teamPlayOffMach.classList.add('_hover');
        addHover();
      }
    });
    teamPlayOffMach.addEventListener('mouseout', function (e) {
      const targetElement = e.target;
      let currentId = targetElement.getAttribute('data-id');
      const allTeams = document.querySelectorAll('.main-play-off__wrapper *[data-id="' + currentId + '"]');
      function removeHover() {
        for (let index = 0; index < allTeams.length; index++) {
          const element = allTeams[index];
          element.closest('.teams-play-off-mach').classList.remove('_hover');
          element.classList.remove('_hover');
        }
      }
      teamPlayOffMach.closest('.teams-play-off-mach').classList.remove('_hover');
      teamPlayOffMach.classList.remove('_hover');
      removeHover();
    });
  });
}
//========================================================================================================================================================
let topAnalysts = document.querySelector('.top-analysts');
let top10Bk = document.querySelector('.top-10-bk');

window.addEventListener('resize', () => {
  if (differencesSlider) {
    mobileSlider();
  }
  if (topAnalysts && top10Bk) {
    addClassList();
  }
  if (mediaSlider) {
    bildsliderMediaLending();
  }
});

function addClassList() {
  if (window.innerWidth <= 767.98 && topAnalysts.dataset.mobile == 'false' && top10Bk.dataset.mobile == 'false') {
    topAnalysts.dataset.mobile = 'true';
    top10Bk.dataset.mobile = 'true';
    topAnalysts.classList.add('_tabs-block');
    top10Bk.classList.add('_tabs-block');
    let tabsWrraper = document.querySelectorAll('._tabs-wrapper');
    for (let index = 0; index < tabsWrraper.length; index++) {
      let tab = tabsWrraper[index];
      let tabs_items = tab.querySelectorAll('._tabs-item');
      let tabs_blocks = tab.getElementsByClassName('_tabs-block');
      for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener('click', function (e) {
          for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.classList.remove('_active');
            tabs_blocks[index].classList.remove('_active');
          }
          tabs_item.classList.add('_active');
          tabs_blocks[index].classList.add('_active');
          e.preventDefault();
        });
      }
    }
  }
  if (window.innerWidth > 767.98) {
    top10Bk.dataset.mobile = 'false';
    topAnalysts.dataset.mobile = 'false';
    topAnalysts.classList.remove('_tabs-block');
    top10Bk.classList.remove('_tabs-block');
  }
}

if (topAnalysts && top10Bk) {
  addClassList();
}
//========================================================================================================================================================
const popuPlogin6 = document.querySelector('.popup_login-new-6');
if (popuPlogin6) {
  popuPlogin6.addEventListener('click', (e) => {
    if (e.target.classList.contains('login-new-6__column_three') || e.target.closest('.login-new-6__column_three')) {
      document.querySelector('.login-new-6__column_three').classList.add('_selected');
      if (document.querySelector('.login-new-6__column_two').classList.contains('_selected')) {
        document.querySelector('.login-new-6__column_two').classList.remove('_selected');
      }
    }
    if (e.target.classList.contains('login-new-6__column_two') || e.target.closest('.login-new-6__column_two')) {
      document.querySelector('.login-new-6__column_two').classList.add('_selected');
      if (document.querySelector('.login-new-6__column_three').classList.contains('_selected')) {
        document.querySelector('.login-new-6__column_three').classList.remove('_selected');
      }
    }
  });
}
//========================================================================================================================================================
const navigation = document.querySelector('.navigation');
if (navigation) {
  navigation.addEventListener('click', (e) => {
    if (e.target.classList.contains('navigation__button') || e.target.closest('.navigation__button')) {
      navigation.querySelector('.navigation__button').classList.toggle('_active');
      navigation.querySelector('.navigation__lists').classList.toggle('_active');
    }
  });
}
//========================================================================================================================================================
const notificationSettings = document.querySelector('.page__content_notification-settings');
if (notificationSettings) {
  notificationSettings.addEventListener('click', function (e) {
    if (
      (e.target.classList.contains('list-notification-settings__item') && window.innerWidth <= 768.98) ||
      e.target.closest('.list-notification-settings__item')
    ) {
      notificationSettings.classList.add('_active');
      e.target.closest('.list-notification-settings__li').querySelector('.list-notification-settings__sub-menu').classList.add('_active');
    }
    if (e.target.classList.contains('list-notification-settings__back') || e.target.closest('.list-notification-settings__back')) {
      notificationSettings.classList.remove('_active');
      e.target.closest('.list-notification-settings__sub-menu').classList.remove('_active');
    }
  });
}
//========================================================================================================================================================
const alphabetFilterHeader = document.querySelector('.alphabet-filter__header');
if(alphabetFilterHeader){
	alphabetFilterHeader.addEventListener('click', function (e) {
		if (
      e.target.classList.contains('alphabet-filter__button') ||
      e.target.classList.contains('alphabet-filter__label') ||
      e.target.closest('.alphabet-filter__button') ||
      e.target.closest('.alphabet-filter__label')
    ) {
		 e.preventDefault();
		e.target.closest('.alphabet-filter').querySelector('.alphabet-filter__items').classList.toggle('_active');
    }
	})
}