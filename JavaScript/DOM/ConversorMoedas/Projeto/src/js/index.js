import { MainController } from "./Controllers/MainController.js";

let state = {};
export { state };

const init = async () => {
  console.log("Iniciou o programa");
  await MainController();
};

init();
