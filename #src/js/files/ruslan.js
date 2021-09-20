// account-settings.html
const loginOptionsItems = document.querySelector(".login-options__items");

if (loginOptionsItems) {
  loginOptionsItems.addEventListener("click", loginOptionsItemsActions);
  function loginOptionsItemsActions(e) {
    const targetElement = e.target;
    if (
      targetElement.closest(".login-options__compare") ||
      targetElement.classList.contains("login-options__compare")
    ) {
      targetElementItem = targetElement.classList.contains(
        "login-options__compare"
      )
        ? targetElement
        : targetElement.closest(".login-options__compare");
      targetElementItem.classList.toggle("_active");
    }
  }
}
//========================================================================================================================================================
// payment-data.html
const newPropsCardsButtons = document.querySelectorAll(
  "._payment-method-buttons"
);
if (newPropsCardsButtons) {
  for (let index = 0; index < newPropsCardsButtons.length; index++) {
    const elementButtons = newPropsCardsButtons[index];
    elementButtons.addEventListener("click", function (e) {
      const targetElement = e.target;
      if (
        targetElement.classList.contains("payment-method-button") ||
        targetElement.closest(".payment-method-button")
      ) {
        const newPropsCardsButtonsActive = elementButtons.querySelector(
          ".payment-method-button._active"
        );
        if (newPropsCardsButtonsActive)
          newPropsCardsButtonsActive.classList.remove("_active");
        const newPropsCardsButtonsItem = targetElement.classList.contains(
          "payment-method-button"
        )
          ? targetElement
          : targetElement.closest(".payment-method-button");
        newPropsCardsButtonsItem.classList.toggle("_active");
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================

//========================================================================================================================================================
//event-vip.html
const mapsTbdItems = document.querySelectorAll(".maps-tbd-items");
if (mapsTbdItems) {
  for (let index = 0; index < mapsTbdItems.length; index++) {
    const itemMapsTbd = mapsTbdItems[index];
    itemMapsTbd.addEventListener("click", function (e) {
      const targetElement = e.target;
      if (
        targetElement.classList.contains("item-maps-tbd") ||
        targetElement.closest(".item-maps-tbd")
      ) {
        const itemMapsTbdActive = itemMapsTbd.querySelector(
          ".item-maps-tbd._active"
        );
        if (itemMapsTbdActive) itemMapsTbdActive.classList.remove("_active");
        const itemMapsTbdItem = targetElement.classList.contains(
          "item-maps-tbd"
        )
          ? targetElement
          : targetElement.closest(".item-maps-tbd");
        itemMapsTbdItem.classList.toggle("_active");
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================
let _maps = document.querySelectorAll("._maps");
if (_maps.length > 0) {
  for (let index = 0; index < _maps.length; index++) {
    const _mapsElement = _maps[index];
    _mapsElement.addEventListener("click", mapsActions);
    function mapsActions(e) {
      const targetElement = e.target;
      if (
        targetElement.classList.contains("map-tbd__title") ||
        targetElement.closest(".map-tbd__title")
      ) {
        targetElement.closest(".map-tbd__header").classList.toggle("_active");
        _slideToggle(
          targetElement.closest(".map-tbd").querySelector(".map-tbd__body")
        );
        e.preventDefault();
      }
    }
  }
}
//========================================================================================================================================================
const tablesMapTbdBody = document.querySelectorAll(".tables-map-tbd__body");
if (tablesMapTbdBody) {
  for (let index = 0; index < tablesMapTbdBody.length; index++) {
    const tableMapTbdBody = tablesMapTbdBody[index];
    tableMapTbdBody.addEventListener("click", function (e) {
      const targetElement = e.target;
      if (
        targetElement.classList.contains("tables-map-tbd__item") ||
        targetElement.closest(".tables-map-tbd__item")
      ) {
        const tableMapTbdBodyActive = tableMapTbdBody.querySelector(
          ".tables-map-tbd__item.tables-map-tbd__item_domainant"
        );
        if (tableMapTbdBodyActive)
          tableMapTbdBodyActive.classList.remove(
            "tables-map-tbd__item_domainant"
          );

        const tableMapTbdBodyItem = targetElement.classList.contains(
          "tables-map-tbd__item"
        )
          ? targetElement
          : targetElement.closest(".tables-map-tbd__item");
        tableMapTbdBodyItem.classList.toggle("tables-map-tbd__item_domainant");
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================
