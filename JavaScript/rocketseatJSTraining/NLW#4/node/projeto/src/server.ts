import { app, port } from "./app";

// Cria servidor: parametros, porta e função ser executada
app.listen( port, () => console.log( `Server is running on port: ${ port }` ) );

