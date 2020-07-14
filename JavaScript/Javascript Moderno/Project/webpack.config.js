
// importando módulo "path"
const path = require( "path" );

// importando módulo do plugin que manipula o arquivo html: html-webpack-plugin
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

module.exports = {

    // ponto de entrada ( adicionando ponto de entrada do babel-polyfill )
    entry: [ "@babel/polyfill", "./src/js/index.js" ],

    // ponto de saida
    output: {
        // __dirname = caminho absoluto da pasta do projeto
        path: path.resolve( __dirname, "dist" ),
        filename: "js/bundle.js"
    },

    // adicionamos a propriedade mode no script diretamente no package.json
    // mode: "development"

    
    // configuração do webpack-dev-server:
    devServer: {

        // especifica a pasta para qual o webpack server "hospeda" nossos arquivos
        // pasta src é a pasta de aplicação que os desenvolvedores irão desenvolver a aplicação.
        // pasta dist é a pasta de aplicação que nós iremos entregar para o client
        // podemos especificar na propriedade abaixo a porta que ele será entregue tbm, mas depois iremos nos aprofundar nisso
        contentBase: "./dist"


    },

    // Configurando plugins:
    plugins: [
        // criamos uma nova instancia desse plugin
        new HtmlWebpackPlugin( {
            // Options desse plugin:
            filename: "index.html", 
            template: "./src/index.html" 
        } )
    ],
    
    // Configurando Loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}   