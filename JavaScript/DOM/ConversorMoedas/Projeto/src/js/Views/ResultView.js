import { state } from "../index.js";
import { templateOption } from "./optionsView.js";
const localError = document.querySelector(".container-form");
const localResult = document.querySelector(".result");
const localInfoResult = document.querySelector(".coin-info");

export const showError = (message) => {
  let spanError = `<span class="error-message"> 
        ${message}
    </span>`;

  localError.insertAdjacentHTML("afterend", spanError);
};

export const clearError = () => {
  let positionError = document.querySelector(".error-message");
  if (positionError !== null) {
    positionError.remove();
  }
};

export const showInfoResult = (coin0, bid, coin1) => {
  const templateString = `1 ${coin0} = ${bid} ${coin1}`;
  localInfoResult.innerHTML = templateString;
};

const formatResult = (result) => {
  return result.replace(".", ",");
};

export const showResult = (result) => {
  localResult.innerHTML = formatResult(result);
};

export const clearAllViews = () => {
  showResult("");
  localInfoResult.innerHTML = "";
  clearError();
};
