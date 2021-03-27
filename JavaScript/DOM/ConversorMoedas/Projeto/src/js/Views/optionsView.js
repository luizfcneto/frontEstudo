import { state } from "../index.js";

export const templateOption = ({ code, name }) => {
  return `<option value="${code}"> ${name} </option>`;
};

export const renderOptions = (arrayOptionTemplate) => {
  arrayOptionTemplate.forEach((element) => {
    state.selects.selectActualEl.insertAdjacentHTML("beforeend", element);
  });

  arrayOptionTemplate.forEach((element) => {
    state.selects.selectToEl.insertAdjacentHTML("beforeend", element);
  });
};
