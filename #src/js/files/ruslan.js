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
