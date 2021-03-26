import { state } from "../index.js";

export const setUpOptions = () => {
  const selectActualEl = document.querySelector("#actual");
  const selectToEl = document.querySelector("#to");

  state.selects = {
    selectActualEl: selectActualEl,
    selectToEl: selectToEl,
  };

  const arrayOptionTemplate = state.data.map(templateOption);
  renderOptions(arrayOptionTemplate);
};

export const templateOption = ({ code, name }) => {
  return `<option value="${code}"> ${name} </option>`;
};

const renderOptions = (arrayOptionTemplate) => {
  arrayOptionTemplate.forEach((element) => {
    state.selects.selectActualEl.insertAdjacentHTML("beforeend", element);
  });

  arrayOptionTemplate.forEach((element) => {
    state.selects.selectToEl.insertAdjacentHTML("beforeend", element);
  });
};
