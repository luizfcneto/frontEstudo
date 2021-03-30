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

// Refatorar
const calculateBidConversion = (coin0, coin1) => {
  if (coin0 === "BRL") {
    let arrayCoins = state.data;
    let coinArrayObj = arrayCoins.filter((coin) => {
      if (coin.name === coin1) {
        console.log(coin.bid);
        return coin.bid;
      }
    });

    let bid = coinArrayObj[0].bid;
    bid = parseFloat(bid);
    bid = 1 / bid;
    return bid;
  }

  if (coin1 === "BRL") {
    const arrayCoins = state.data;
    let coinArrayObj = arrayCoins.filter((coin) => {
      if (coin.name === coin0) {
        return { bid: coin.bid };
      }
    });

    let bid = coinArrayObj[0].bid;
    bid = parseFloat(bid);
    return bid;
  }
};

export { ExchangeService, calculateBidConversion };
