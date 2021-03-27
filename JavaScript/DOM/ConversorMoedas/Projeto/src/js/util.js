/*
    Descrição: 
        Criar um novo objeto json, data, que será um array de objetos
        entrada:
        {
          USD: {
            "code": "USD",
            "name": "Dolar",
            "bid": "5.56",
            ...
          },
          EUR: {
            "code": "EUR",
            "name": "Euro",
            "bid": "6.789",
            ...
          }
        }
        Exemplo de saida: um array de objetos json

        [
          {
            "code": "USD",
            "name": "Dolar",
            "bid": "5.56"
          },
          
          {
            "code": "EUR",
            "name": "Euro",
            "bid": "6.789"
          }
        ]


*/

export const adaptJsonResponse = (json) => {
  let jsonResponse = [];

  for (let code in json) {
    let tempJson = {
      code: json[code].code,
      name: json[code].name,
      bid: json[code].bid,
    };
    jsonResponse.push(tempJson);
  }

  return jsonResponse;
};

export const validateInputValue = (value) => {
  return isNaN(value);
};
