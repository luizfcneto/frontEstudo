import { state } from "../index.js";
import { adaptJsonResponse } from "../util.js";

class Exchange {
  code;
  url = "https://economia.awesomeapi.com.br/json/";

  constructor(code) {
    this.code = code;
  }

  setStateWithData(json) {
    state.data = adaptJsonResponse(json);
  }

  async getAllData() {
    const uri = this.url + "all";

    try {
      let response = await fetch(uri);
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Erro, status requisição: " + response.status);
      } else {
        response = await response.json();
        this.setStateWithData(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export { Exchange };
