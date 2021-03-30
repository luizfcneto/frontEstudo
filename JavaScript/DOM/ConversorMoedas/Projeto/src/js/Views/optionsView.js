import { state } from "../index.js";

export const templateOption = (element) => {
  return `<option value="${element.name}"> ${element.name} </option>`;
};

export const renderOptions = (arrayOptionTemplate) => {
  arrayOptionTemplate.forEach((element) => {
    state.selects.selectActualEl.insertAdjacentHTML("beforeend", element);
  });

  arrayOptionTemplate.forEach((element) => {
    state.selects.selectToEl.insertAdjacentHTML("beforeend", element);
  });
};
