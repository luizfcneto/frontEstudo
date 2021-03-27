import { state } from "../index.js";
import { Input } from "../Models/Input.js";
import { renderOptions, templateOption } from "../Views/optionsView.js";
import { ExchangeService } from "../service/ExchangeService.js";
import { validateInputValue } from "../util.js";
import { showError, clearError } from "../Views/ResultView.js";

const setUpOptions = async () => {
  const templateOptions = state.data.map(templateOption);
  renderOptions(templateOptions);
};

const getInputValue = () => {
  return state.inputEl.value;
};

const doTheMagic = () => {
  clearError();
  console.log("Começa o processo de conversão");
  let value = getInputValue();
  value = parseFloat(value);

  if (validateInputValue(value))
    showError("Valor Informado não é um número válido");
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
