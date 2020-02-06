/*
    Descrição:
        Fazer uma função que recebe como parametro uma string ( contendo uma url )
        Criar um objeto que contenha informações "propriedades" desta url, como:
            - fonte;        //"source"
            - protocolo;    //"protocol"
            - dominio;      //"domain"
            - host;         //"host"
            - porta;        //"port"
            - consulta;     //"query"
            - parametros;   //"params"
            - arquivo;      //"file"
            - hash;         //"hash"
            - caminho;      //"path"
            - caminho relativo;         //"relative"
            - segmentação   //"segments"

    Exemplo:
        entrada: "https://github.com/search?q=luizfcneto%2FfrontEstudo"
        saida:
        { 
            source: "https://github.com/search?q=luizfcneto%2FfrontEstudo",
            protocol: "https",
            host: "github.com",
            port: "",
            query: "?q=luizfcneto%2FfrontEstudo",
            params: {
                "q":"luizfcneto%2FfrontEstudo"
            },
            file: "search",
            hash: "",
            path: "/search",
            relative: "/search?q=luizfcneto%2FfrontEstudo",
            segments: [
                "search"
            ]      
        }

String.match:
    https://www.w3schools.com/jsref/jsref_match.asp

String.search:
    https://www.w3schools.com/jsref/jsref_search.asp

String.trim:
    https://www.w3schools.com/jsref/jsref_trim_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    https://www.geeksforgeeks.org/javascript-string-prototype-trim-function/

String.split:
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
    https://www.geeksforgeeks.org/javascript-string-prototype-split-function/

String.replace:
    https://www.w3schools.com/jsref/jsref_replace.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace

Object.defineProperty:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

Array.reverse:
    https://www.w3schools.com/jsref/jsref_reverse.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    https://www.geeksforgeeks.org/javascript-array-prototype-reverse/

Array.pop: 
    https://www.w3schools.com/jsref/jsref_pop.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
    
Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-12.php
*/

function parseUrl( url ){
    console.log( "Parametro Fornecido: " + url );
    let a = document.createElement( "a" );
    a.href = url;

    let query = url.trim().split( "?" );
    let params = getParams( query[1] );

    let file = getFile( url );

    let path = getPath( url, a.hostname );

    let relative = getRelative( url, a.hostname );

    let segments = getSegments( path );

    // Retornando um objeto
    return {
        "source": a.href,
        "protocol": a.protocol.replace( ":", "" ),
        "host": a.hostname,
        "port": a.port,        
        "query": "?" + query[1].toString(),
        "params": params,
        "file": file,
        "hash": a.hash,     
        "path": path,
        "relative": relative,
        "segments": segments
    }
}

let object1 = parseUrl( "https://github.com/search?q=luizfcneto%2FfrontEstudo" );
console.log( object1 );

let object2 = parseUrl( "https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python" );
console.log( object2 );

function getParams( query ){
    let params = {};
    
    query = query.trim();
    // console.log( query );

    // Verifica se tem query
    if( query === null || query === "" ){
        console.log( "Entrou aqui, logo não tem query" );
        return {};
    
    }else{
          
        // Verifica se o query possui &, portanto possui outros parametros
        if( query.search( /&/gm ) > 0 ){
            let queries = query.split("&");
            // console.log( queries );

            for( let i = 0; i < queries.length; i++ ){
                let q = queries[i].split("=");
                // console.log( q );
                
                // Criando uma propriedade do objeto params com nome de q[0] contendo o valor q[1]
                Object.defineProperty( params, q[0], {
                    value: q[1]
                });
            }
            return params;
        
        // Não possui mais de um parametro
        }else{
            let q = query.split( "=" );
            // console.log( q );

            // Criando uma propriedade do objeto params com nome de q[0] contendo o valor q[1]
            Object.defineProperty( params, q[0], {
                value: q[1]
            });

            // console.log( params );
            return params;
        }
    }
}

function getFile( url ){
    let str = url.trim().split( "?" );
    let file = str[0].split("/");
    // console.log( file[ file.length - 1 ] );
    return file[ file.length - 1 ];
}

function getPath( url, domain ){
    let str = url.trim().split("?");
    // console.log( str );

    let posiDomain = str[0].search( domain );
    // console.log( posiDomain );
    
    let path = str[0].slice( posiDomain + domain.length, str[0].length );
    // console.log( path );
    return path; 

}

function getRelative( url, domain ){
    let posiDomain = url.search( domain );
    return url.slice( posiDomain + domain.length, url.length );
}

function getSegments( path ){
    // console.log( path );
    path = path.trim().split("/");

    if( path[0] === "" ){
        path = path.reverse();
        path.pop();
        path.reverse();
    }
    // console.log( path );
    return path;
}