import { state } from "../index.js";
import { adaptJsonResponse } from "../util.js";

class ExchangeService {
  url;

  constructor() {
    this.url = "https://economia.awesomeapi.com.br/json/all";
  }

  setStateWithData(json) {
    state.data = adaptJsonResponse(json);
  }

  async getAllData() {
    try {
      let response = await fetch(this.url);
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

export { ExchangeService };
