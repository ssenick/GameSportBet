// Ripple
let timer;
let timeOut;
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('div');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  clearTimeout(timer);

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.pageX - (button.getBoundingClientRect().left + pageXOffset) - radius}px`;
  circle.style.top = `${event.pageY - (button.getBoundingClientRect().top + pageYOffset) - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.querySelector('.ripple');

  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);

  timeOut = getRippleTime(button, '.ripple');

  timer = setTimeout(() => {
    const ripple = button.querySelector('.ripple');
    if (ripple) ripple.remove();
  }, timeOut);
}
const buttons = document.querySelectorAll('._ripple');
for (const button of buttons) {
  button.addEventListener('click', createRipple);
}
function buttonsIconRipple(event) {
  const button = event.currentTarget;
  if (button.querySelector('.ripple-icon')) {
    clearTimeout(timer);
    button.querySelector('.ripple-icon').remove();
  }
  if (button.classList.contains('checkbox')) {
    button.querySelector('.checkbox__icon').insertAdjacentHTML('beforeend', `<span tabindex="-1" class="ripple-icon"></span>`);
  } else {
    button.insertAdjacentHTML('beforeend', `<span tabindex="-1" class="ripple-icon"></span>`);
  }

  timeOut = getRippleTime(button, '.ripple-icon');

  timer = setTimeout(() => {
    if (button.querySelector('.ripple-icon')) {
      button.querySelector('.ripple-icon').remove();
    }
  }, timeOut);
}
const buttonsIcon = document.querySelectorAll('.checkbox,.button_icon-gradient,.button_icon,.button_icon-dark,._arrow');
for (const button of buttonsIcon) {
  button.addEventListener('click', buttonsIconRipple);
}
function getRippleTime(button, el) {
  const ripple = button.querySelector(el);
  return parseInt(window.getComputedStyle(ripple).animationDuration.replace(/[^\d]/g, '')) * 100;
}
// ---------

const cheksRadios = document.querySelectorAll('input[type="checkbox"],input[type="radio"]');
if (cheksRadios.length > 0) {
  cheksRadios.forEach((cheksRadiosItem) => {
    if (cheksRadiosItem.checked) cheksRadiosItem.parentElement.classList.add('_active');
    cheksRadiosItem.addEventListener('change', function (e) {
      cheksRadiosItem.parentElement.classList.toggle('_active');
      cheksRadiosItem.blur();
    });
  });
}

// ---------

let forms = document.querySelectorAll('form');
if (forms.length > 0) {
  for (let index = 0; index < forms.length; index++) {
    const el = forms[index];
    el.addEventListener('submit', form_submit);
  }
}
async function form_submit(e) {
  let btn = e.target;
  let form = btn.closest('form');
  let error = form_validate(form);
  if (error == 0) {
    let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
    let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
    const message = form.getAttribute('data-message');
    const ajax = form.getAttribute('data-ajax');

    //SendForm
    if (ajax) {
      e.preventDefault();
      let formData = new FormData(form);
      form.classList.add('_sending');
      let response = await fetch(formAction, {
        method: formMethod,
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        form.classList.remove('_sending');
        if (message) {
          popup_open(message + '-message');
        }
        form_clean(form);
      } else {
        alert('Ошибка');
        form.classList.remove('_sending');
      }
    }
    // If test
    if (form.hasAttribute('data-test')) {
      e.preventDefault();
      popup_open(message + '-message');
      form_clean(form);
    }
  } else {
    let form_error = form.querySelectorAll('._error');
    if (form_error && form.classList.contains('_goto-error')) {
      _goto(form_error[0], 1000, 50);
    }
    e.preventDefault();
  }
}
function form_validate(form) {
  let error = 0;
  let form_req = form.querySelectorAll('._req');
  if (form_req.length > 0) {
    for (let index = 0; index < form_req.length; index++) {
      const el = form_req[index];
      if (!_is_hidden(el)) {
        error += form_validate_input(el);
      }
    }
  }
  return error;
}
function form_validate_input(input) {
  let error = 0;
  let input_g_value = input.getAttribute('data-value');

  if (input.getAttribute('name') == 'email' || input.classList.contains('_email')) {
    if (input.value != input_g_value) {
      let em = input.value.replace(' ', '');
      input.value = em;
    }
    if (email_test(input) || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  } else if (input.getAttribute('type') == 'password' && input.value.length < 8) {
    form_add_error(input);
    error++;
  } else if (input.getAttribute('type') == 'checkbox' && input.checked == false) {
    form_add_error(input);
    error++;
  } else {
    if (input.value == '' || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  }
  return error;
}
function form_add_error(input) {
  input.classList.add('_error');
  input.parentElement.classList.add('_error');

  let input_error = input.parentElement.parentElement.querySelector('.input__error');
  if (input_error) {
    input.parentElement.parentElement.removeChild(input_error);
  }
  let input_error_text = input.getAttribute('data-error');
  if (input_error_text && input_error_text != '') {
    input.parentElement.parentElement.insertAdjacentHTML('beforeend', '<div class="input__error">' + input_error_text + '</div>');
  }
}
function form_remove_error(input) {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');

  let input_error = input.parentElement.parentElement.querySelector('.input__error');
  if (input_error) {
    input.parentElement.parentElement.removeChild(input_error);
  }
}
function form_clean(form) {
  let inputs = form.querySelectorAll('input,textarea');
  for (let index = 0; index < inputs.length; index++) {
    const el = inputs[index];
    el.parentElement.classList.remove('_focus');
    el.classList.remove('_focus');
    el.value = el.getAttribute('data-value');
  }
  let checkboxes = form.querySelectorAll('.checkbox__input');
  if (checkboxes.length > 0) {
    for (let index = 0; index < checkboxes.length; index++) {
      const checkbox = checkboxes[index];
      checkbox.checked = false;
    }
  }
  let selects = form.querySelectorAll('select');
  if (selects.length > 0) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      const select_default_value = select.getAttribute('data-default');
      select.value = select_default_value;
      select_item(select);
    }
  }
}

const inputCounters = document.querySelectorAll('.input__counter');
if (inputCounters.length) {
  inputCounters.forEach((inputCounter) => {
    const input = inputCounter.closest('.input');
    const inputItem = input.querySelector('.input__value');
    const inputCounterStart = inputCounter.innerHTML;
    inputItem.addEventListener('keyup', function (e) {
      const inputItemValue = inputItem.value.length;
      inputCounter.innerHTML = inputCounterStart - inputItemValue;
    });
  });
}

const inputsDisabled = document.querySelectorAll('input:disabled,textarea:disabled');
inputsDisabled.forEach((inputDisabled) => {
  inputDisabled.parentElement.classList.add('_disabled');
  inputDisabled.nextElementSibling.disabled = true;
});

let viewPass = document.querySelectorAll('._viewpass');
for (let index = 0; index < viewPass.length; index++) {
  const element = viewPass[index];
  element.addEventListener('click', function (e) {
    if (element.classList.contains('_active')) {
      element.parentElement.querySelector('input').setAttribute('type', 'password');
    } else {
      element.parentElement.querySelector('input').setAttribute('type', 'text');
    }
    element.classList.toggle('_active');
  });
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
  selects_init();
}
function selects_init() {
  for (let index = 0; index < selects.length; index++) {
    const select = selects[index];
    select_init(select);
  }
  //select_callback();
  document.addEventListener('click', function (e) {
    selects_close(e);
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      selects_close(e);
    }
  });
}
function selects_close(e) {
  const selects = document.querySelectorAll('.select');
  if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      const select_body_options = select.querySelector('.select__options');
      select.classList.remove('_active');
      _slideUp(select_body_options, 100);
    }
  }
}
function select_init(select) {
  const select_parent = select.parentElement;
  const select_modifikator = select.getAttribute('class');
  const select_selected_option = select.querySelector('option:checked');
  select.setAttribute('data-default', select_selected_option.value);
  select.setAttribute('tabindex', '-1');

  select_parent.insertAdjacentHTML('beforeend', `<div class="select select_${select_modifikator}"></div>`);

  let new_select = select.parentElement.querySelector('.select');
  new_select.appendChild(select);
  select_item(select);
}
function select_item(select) {
  const select_parent = select.parentElement;
  const select_items = select_parent.querySelector('.select__item');
  const select_options = select.querySelectorAll('option');
  const select_selected_option = select.querySelector('option:checked');
  const select_selected_text = select_selected_option.text;
  const select_type = select.getAttribute('data-type');

  let disabled = select.disabled ? 'disabled' : '';

  if (select_items) {
    select_items.remove();
  }

  let select_type_content = '';
  if (select_type == 'input') {
    select_type_content =
      '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' +
      select_selected_text +
      '" data-error="Ошибка" data-value="' +
      select_selected_text +
      '" class="select__input"></div>';
  } else {
    const select_option_discount = select_selected_option.dataset.discount
      ? `<small class="_success">${select_selected_option.dataset.discount}</small>`
      : '';
    const select_selected_icon = select_selected_option.dataset.icon ? ' ' + select_selected_option.dataset.icon : '';
    select_type_content =
      '<div class="select__value"><span class="' + select_selected_icon + '">' + select_selected_text + select_option_discount + '</span></div>';
    if (select_selected_option.hasAttribute('data-image')) {
      select_type_content =
        '<div class="select__value"><img class="select__image" src="' +
        select_selected_option.dataset.image +
        '" alt=""><span class="' +
        select_selected_icon +
        '">' +
        select_selected_text +
        select_option_discount +
        '</span></div>';
    }
  }

  select_parent.insertAdjacentHTML(
    'beforeend',
    '<div class="select__item">' +
      '<button ' +
      disabled +
      ' type="button" class="select__title">' +
      select_type_content +
      '</button>' +
      '<div hidden class="select__options">' +
      select_get_options(select_options) +
      '</div>' +
      '</div></div>'
  );

  select_actions(select, select_parent);
}
function select_actions(original, select) {
  const select_item = select.querySelector('.select__item');
  const selectTitle = select.querySelector('.select__title');
  const select_body_options = select.querySelector('.select__options');
  const select_options = select.querySelectorAll('.select__option');
  const select_type = original.getAttribute('data-type');
  const select_input = select.querySelector('.select__input');

  selectTitle.addEventListener('click', function (e) {
    selectItemActions();
  });

  function selectMultiItems() {
    let selectedOptions = select.querySelectorAll('.select__option');
    let originalOptions = original.querySelectorAll('option');
    let selectedOptionsText = [];
    for (let index = 0; index < selectedOptions.length; index++) {
      const selectedOption = selectedOptions[index];
      originalOptions[index].removeAttribute('selected');
      if (selectedOption.classList.contains('_selected')) {
        const selectOptionText = selectedOption.innerHTML;
        selectedOptionsText.push(selectOptionText);
        originalOptions[index].setAttribute('selected', 'selected');
      }
    }
    select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
  }
  function selectItemActions(type) {
    if (!type) {
      let selects = document.querySelectorAll('.select');
      for (let index = 0; index < selects.length; index++) {
        const select = selects[index];
        const select_body_options = select.querySelector('.select__options');
        if (select != select_item.closest('.select')) {
          select.classList.remove('_active');
          _slideUp(select_body_options, 100);
        }
      }
      _slideToggle(select_body_options, 100);
      select.classList.toggle('_active');
    }
  }
  for (let index = 0; index < select_options.length; index++) {
    const select_option = select_options[index];
    const select_option_value = select_option.getAttribute('data-value');
    const select_option_text = select_option.innerHTML;

    if (select_type == 'input') {
      select_input.addEventListener('keyup', select_search);
    } else {
      if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
        select_option.style.display = 'none';
      }
    }
    select_option.addEventListener('click', function () {
      for (let index = 0; index < select_options.length; index++) {
        const el = select_options[index];
        el.style.display = 'flex';
      }
      if (select_type == 'input') {
        select_input.value = select_option_text;
        original.value = select_option_value;
      } else {
        if (original.hasAttribute('multiple')) {
          select_option.classList.toggle('_selected');
          selectMultiItems();
        } else {
          select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
          original.value = select_option_value;
          select_option.style.display = 'none';
        }
      }
      let type;
      if (original.hasAttribute('multiple')) {
        type = 'multiple';
      }
      selectItemActions(type);
    });
  }
}
function select_get_options(select_options) {
  if (select_options) {
    let select_options_content = '';
    for (let index = 0; index < select_options.length; index++) {
      const select_option = select_options[index];
      const select_option_value = select_option.value;
      const select_option_image = select_option.hasAttribute('data-image');
      if (select_option_value != '' && !select_option_image) {
        const select_option_text = select_option.innerHTML;
        const select_option_discount = select_option.dataset.discount ? `<small class="_success">${select_option.dataset.discount}</small>` : '';
        const select_option_icon = select_option.dataset.icon ? ' ' + select_option.dataset.icon + ' ' : '';
        select_options_content =
          select_options_content +
          '<button type="button" data-value="' +
          select_option_value +
          '" class="select__option"><span class="' +
          select_option_icon +
          '">' +
          select_option_text +
          select_option_discount +
          '</span></button>';
      } else {
        const select_option_text = select_option.innerHTML;
        const select_option_discount = select_option.dataset.discount ? `<small class="_success">${select_option.dataset.discount}</small>` : '';
        const select_option_icon = select_option.dataset.icon ? ' ' + select_option.dataset.icon + ' ' : '';
        select_options_content = select_options_content + '<button type="button" data-value="' + select_option_value +'" class="select__option"><img class="select__image" src="' + select_option.dataset.image + '" alt=""><span class="' + select_option_icon + '">' +select_option_text + select_option_discount +'</span></button>';
		}
    }
    return select_options_content;
  }
}
function select_search(e) {
  let select_block = e.target.closest('.select ').querySelector('.select__options');
  let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
  let select_search_text = e.target.value.toUpperCase();

  for (let i = 0; i < select_options.length; i++) {
    let select_option = select_options[i];
    let select_txt_value = select_option.textContent || select_option.innerText;
    if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
      select_option.style.display = '';
    } else {
      select_option.style.display = 'none';
    }
  }
}
function selects_update_all() {
  let selects = document.querySelectorAll('select');
  if (selects) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      select_item(select);
    }
  }
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
  if (inputs.length > 0) {
    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];
      const input_g_value = input.getAttribute('data-value');
      input_placeholder_add(input);
      if (input.value != '' && input.value != input_g_value) {
        input_selected_add(input);
      }
      input.addEventListener('focus', function (e) {
        input_focus_add(input);
        if (input.value == input_g_value) {
          input.value = '';
        }
        if (input.getAttribute('data-type') === 'pass' && !input.parentElement.querySelector('.form__viewpass').classList.contains('_active')) {
          input.setAttribute('type', 'password');
        }
        if (input.classList.contains('_date')) {
          input.parentElement.classList.add('_calendar');
        }
        if (input.classList.contains('_phone')) {
          //'+7(999) 999 9999'
          //'+38(999) 999 9999'
          //'+375(99)999-99-99'
          input.classList.add('_mask');
          Inputmask('+7 (999) 999-99-99', {
            //"placeholder": '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function () {
              input_clear_mask(input, input_g_value);
            },
          }).mask(input);
        }
        if (input.classList.contains('_digital')) {
          input.classList.add('_mask');
          Inputmask('9{1,}', {
            placeholder: '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function () {
              input_clear_mask(input, input_g_value);
            },
          }).mask(input);
        }
        form_remove_error(input);
      });
      input.addEventListener('blur', function (e) {
        if (input.value == '') {
          input_selected_remove(input);
          input.value = input_g_value;
          if (input.classList.contains('_mask')) {
            input_clear_mask(input, input_g_value);
          }
          if (input.getAttribute('data-type') === 'pass') {
            input.setAttribute('type', 'text');
          }
        } else {
          input_selected_add(input);
          if (input.classList.contains('_email')) {
            inputCheckEmail(input);
          }
        }
        input_focus_remove(input);
      });
    }
  }
}
function input_placeholder_add(input) {
  const input_g_value = input.getAttribute('data-value');
  if (input.value == '' && input_g_value != '') {
    input.value = input_g_value;
  }
}
function input_focus_add(input) {
  input.classList.add('_focus');
  input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
  input.classList.remove('_focus');
  input.parentElement.classList.remove('_focus');
}
function input_selected_add(input) {
  input.classList.add('_selected');
  input.parentElement.classList.add('_selected');
}
function input_selected_remove(input) {
  input.classList.remove('_selected');
  input.parentElement.classList.remove('_selected');
}
function input_clear_mask(input, input_g_value) {
  input.inputmask.remove();
  input.value = input_g_value;
  input_focus_remove(input);
}

function inputCheckEmail(input) {
  input.parentElement.nextElementSibling.classList.add('_active');
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
  for (let index = 0; index < quantityButtons.length; index++) {
    const quantityButton = quantityButtons[index];
    quantityButton.addEventListener('click', function (e) {
      let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
      if (quantityButton.classList.contains('quantity__button_plus')) {
        value++;
      } else {
        value = value - 1;
        if (value < 1) {
          value = 1;
        }
      }
      quantityButton.closest('.quantity').querySelector('input').value = value;
    });
  }
}

//RANGE
const startPriceSlider = document.querySelector('.range-info-tarifs__item');
if (startPriceSlider) {
  noUiSlider.create(startPriceSlider, {
    start: [0],
    connect: 'lower',
    //tooltips: [wNumb({ thousand: ' ', decimals: 0, suffix: "₽" })],
    range: {
      min: [0],
      max: [500000],
    },
  });

  const rangeSliderValueElement = document.querySelector('.range-info-tarifs__value');
  const numFormat = wNumb({
    thousand: ' ',
    decimals: 0,
    suffix: ' ₽',
  });

  const toolTip = startPriceSlider.querySelector('.noUi-touch-area');
  const touchArea = startPriceSlider.querySelector('.noUi-touch-area');
  //const instance = tippy(toolTip, {});

  touchArea.setAttribute('tabindex', '-1');

  startPriceSlider.noUiSlider.on('update', function (values, handle) {
    toolTip.dataset.tippyContent = numFormat.to(Number(values[handle]));
    rangeSliderValueElement.innerHTML = numFormat.to(Number(values[handle]));
    //instance.setContent(numFormat.to(Number(startPriceSlider.noUiSlider.get())));
  });
}
//========================================================================================================================================================
const startPriceBkSlider = document.querySelector('.set-price-bk-landing-login__range');
if (startPriceBkSlider) {
  noUiSlider.create(startPriceBkSlider, {
    start: [0],
    connect: 'lower',
    //tooltips: [wNumb({ thousand: ' ', decimals: 0, suffix: "₽" })],
    range: {
      min: [0],
      max: [500000],
    },
  });

  //const rangeSliderValueElement = document.querySelector('.set-price-bk-landing-login__range');
  const numFormat = wNumb({
    thousand: ' ',
    decimals: 0,
    suffix: ' ₽',
  });

  const toolTip = startPriceBkSlider.querySelector('.noUi-touch-area');
  const touchArea = startPriceBkSlider.querySelector('.noUi-touch-area');
  const instance = tippy(toolTip, {
    trigger: 'click',
    hideOnClick: false,
  });

  touchArea.setAttribute('tabindex', '-1');

  startPriceBkSlider.noUiSlider.on('update', function (values, handle) {
    toolTip.dataset.tippyContent = numFormat.to(Number(values[handle]));
    instance.setContent(numFormat.to(Number(startPriceBkSlider.noUiSlider.get())));
    instance.show();
  });
}
