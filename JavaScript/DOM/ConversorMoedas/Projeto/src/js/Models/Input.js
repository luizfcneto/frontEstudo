import { state } from "../index.js";

class Input {
  selectActualEl;
  selectToEl;
  inputEl;
  buttonEl;
  value;

  constructor() {
    this.selectActualEl = document.querySelector("#actual");
    this.selectToEl = document.querySelector("#to");
    this.inputEl = document.querySelector(".input-value");
    this.buttonEl = document.querySelector(".btn-converter");

    state.selects = {
      selectActualEl: this.selectActualEl,
      selectToEl: this.selectToEl,
    };

    state.buttonEl = this.buttonEl;
    state.inputEl = this.inputEl;
  }
}

export { Input };
