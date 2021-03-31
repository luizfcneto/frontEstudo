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

const getCoin = (coinName) => {
  let arrayCoins = state.data;
  let [coin] = arrayCoins.filter((coin) => {
    if (coin.name === coinName) {
      return { bid: coin.bid };
    }
  });

  return parseFloat(coin.bid);
};

const getBidConversion = (coin0, coin1) => {
  if (coin0 === coin1) return 1;

  // BRL => Euro
  if (coin0 === "Real") {
    let bid = 1 / getCoin(coin1);
    return bid;
  }

  // Euro => BRL
  if (coin1 === "Real") {
    let bid = getCoin(coin0);
    return bid;
  }

  // Dolar -> Euro
  let taxCoin0ToBRL = 1 / getCoin(coin0);
  let taxCoin1ToBrl = 1 / getCoin(coin1);

  let bid = taxCoin1ToBrl / taxCoin0ToBRL;
  return bid;
};

export { ExchangeService, getBidConversion };
