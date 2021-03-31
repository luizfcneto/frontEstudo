import { state } from "../index.js";
import { Input } from "../Models/Input.js";
import { renderOptions, templateOption } from "../Views/optionsView.js";
import {
  ExchangeService,
  getBidConversion,
} from "../service/ExchangeService.js";
import { validateInputValue } from "../util.js";
import {
  showError,
  clearError,
  showResult,
  showInfoResult,
  clearAllViews,
} from "../Views/ResultView.js";

const setUpOptions = async () => {
  const templateOptions = state.data.map(templateOption);
  renderOptions(templateOptions);
};

const getInputValue = () => {
  return state.inputEl.value;
};

const getCoinFrom = () => {
  return state.selects.selectActualEl.value;
};

const getCoinTo = () => {
  return state.selects.selectToEl.value;
};

const doTheMagic = (event) => {
  event.preventDefault();
  clearError();
  let value = getInputValue();

  if (!validateInputValue(value)) {
    showError("Valor Informado não é um número válido");
  } else {
    let coinFrom = getCoinFrom();
    let coinTo = getCoinTo();
    let bid = getBidConversion(coinFrom, coinTo);

    let result = (bid * parseFloat(getInputValue())).toFixed(4);
    showResult(result);
    showInfoResult(coinFrom, bid.toFixed(4), coinTo);
  }
};

const setEventClickButton = (button, input) => {
  button.addEventListener("click", doTheMagic);
  button.addEventListener("keypress", (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      doTheMagic(event);
    }
  });

  input.addEventListener("keypress", (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      event.preventDefault();
      doTheMagic(event);
    }
  });
};

export const MainController = async () => {
  clearAllViews();
  const exchangeService = new ExchangeService();
  await exchangeService.getAllData();

  new Input();
  setUpOptions();

  setEventClickButton(state.buttonEl, state.inputEl);
};
