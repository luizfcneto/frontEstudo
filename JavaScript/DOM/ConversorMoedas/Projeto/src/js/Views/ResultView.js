import { state } from "../index.js";
const local = document.querySelector(".container-form");

export const showError = (message) => {
  let spanError = `<span class="error-message"> 
        ${message}
    </span>`;

  local.insertAdjacentHTML("afterend", spanError);
};

export const clearError = () => {
  let positionError = document.querySelector(".error-message");
  if (positionError !== null) {
    positionError.remove();
  }
};
