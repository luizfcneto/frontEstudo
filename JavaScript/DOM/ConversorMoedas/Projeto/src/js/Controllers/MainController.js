import { state } from "../index.js";
import { Input } from "../Models/Input.js";
import { renderOptions, templateOption } from "../Views/optionsView.js";
import {
  ExchangeService,
  calculateBidConversion,
} from "../service/ExchangeService.js";
import { validateInputValue } from "../util.js";
import { showError, clearError } from "../Views/ResultView.js";

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
  console.log("Começa o processo de conversão");
  let value = getInputValue();

  if (!validateInputValue(value))
    showError("Valor Informado não é um número válido");

  // 0. catch coin from
  let coinFrom = getCoinFrom();

  // 1. catch coin to
  let coinTo = getCoinTo();

  //
  let bid = calculateBidConversion(coinFrom, coinTo);
  console.log(bid);
};

const setEventClickButton = (button) => {
  button.addEventListener("click", doTheMagic);
};

export const MainController = async () => {
  console.log("Iniciou o programa");
  const exchangeService = new ExchangeService();
  await exchangeService.getAllData();

  new Input();
  setUpOptions();

  setEventClickButton(state.buttonEl);
};
