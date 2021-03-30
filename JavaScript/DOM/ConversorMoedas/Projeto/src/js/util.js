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

// Check if the value is a number, can't contain chars except "," or "."
export const validateInputValue = (value) => {
  // ""
  if (value === "" || value === null || value === undefined) return false;

  // .2344
  if (value[0] === ".") return false;

  let arrayValue = value.split(".");
  // 123.123.123
  if (arrayValue.length > 2) return false;

  // Doing with Regex numbers + "."
  const regexOnlyNumbers = /^(0|[1-9]\d*)(\.\d+)*$/g;
  const valueLength = value.length;
  console.log(valueLength);

  let result = value.match(regexOnlyNumbers);
  return result === null ? false : true;
};
