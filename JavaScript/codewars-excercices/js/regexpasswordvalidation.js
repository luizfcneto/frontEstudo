/*
    Descrição:
        Escrever uma função que receba uma string ( senha ) 
        retornar um regex para validar essa string ( senha );

        critérios:
            Pelo menos 6 digitos
            ao menos uma letra minuscula
            ao menos uma letra maiuscula
            ao menos um numero


Regex:
    https://www.regular-expressions.info/repeat.html
    https://regexr.com/
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    https://www.w3schools.com/js/js_regexp.asp
    https://www.w3schools.com/jsref/jsref_obj_regexp.asp



Testar: 
    https://regex101.com/r/eFB9SP/1/

*/

//Minha solução:
function validate( password ) {
    //console.log( password );
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
}


//Outras soluções:
/*
Minimum eight characters, at least one letter and one number:

"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
Minimum eight characters, at least one letter, one number and one special character:

"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"


function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/           .test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
}

function validate(password) {
  /**
  * positive lookahead is used here to ensure that at least one of each character set is available
  * you need to allow every character (.*) before your lookahead character set, 
  * except you want to ensure the expression starts with i.e. a lowercase character.
  * Each lookahead basically says "Is there <anything> and 1 or more of <character set> in the following expression?"
  * The speciality here is that lookaheads wont touch the matching group so that you can check for 6 or more
  * characters afterwards. The 6 or more characters will simply not match if they don't fulfill every lookahead.
  *
 return /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/.test(password);
}

*/