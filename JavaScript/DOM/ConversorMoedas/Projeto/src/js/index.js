import { Exchange } from "./Models/Exchange.js";
import { setUpOptions } from "./Views/optionsView.js";

let state = {};
export { state };

const init = async () => {
  const test = new Exchange(10);
  await test.getAllData();
  console.log(state);
  setUpOptions();
};

init();
