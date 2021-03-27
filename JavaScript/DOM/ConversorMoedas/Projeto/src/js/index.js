import { MainController } from "./Controllers/MainController.js";

let state = {};
export { state };

const init = async () => {
  await MainController();
  console.log(state);
};

init();
