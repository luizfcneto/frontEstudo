import { state } from "../index.js";

class Input {
  selectActualEl;
  selectToEl;
  inputEl;
  buttonEl;
  value;
  form;

  constructor() {
    this.selectActualEl = document.querySelector("#actual");
    this.selectToEl = document.querySelector("#to");
    this.inputEl = document.querySelector(".input-value");
    this.buttonEl = document.querySelector("#btn-converter");
    this.formEl = document.querySelector("#form-action");

    state.selects = {
      selectActualEl: this.selectActualEl,
      selectToEl: this.selectToEl,
    };

    state.buttonEl = this.buttonEl;
    state.inputEl = this.inputEl;
    state.formEl = this.formEl;
  }
}

export { Input };
