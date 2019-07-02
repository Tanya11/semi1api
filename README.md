# semi1api
archivos para la creacion de la imagen de la api que consume la bd

CREACION DE API  CON NODE JS  EN DOCKER

Pasos a seguir 
1.Crear un carpeta
2. Crear ambiente de desarrollo en node js con el comando

  docker pull node
3. correr el contenedor

docker run -it  -v <carpetaDeAPI>:<cualquierCarpeta> --name<nombreContenedor> -p <puertoLocal>:<PuertoAxponer> node bash
  cada una de las letras a poner significa:
-it agregar un script de consola al iniciar el contenedor
-v crear un carpeta compartida
-d correr el contenedor en segundo plano
-p mapear puerto
-e agregar variable de entorno
--rm borrar el contenedor despues de matarlo ejemplo
  
 4. docker run -it -v ~/Escritorio/API:/App --name api-node -p 3000:3000 node bash
 5. Ver en que ip se esta coriendo el conteiner 
 docker inspect --format '{{ .NetworkSettings.IPAddress }}' ${CID}
 -${CID} los primeros 4 caracteres que tira el conteiner creado
 6. para matar el conteiner ejecutar el siguiente comando
  docker kill <nombredelcontainer>
 7. Ingresar a la caarpeta app
    cd App
 8. Iniciamos el contenedor
    npm init

10. agregar el script start a nuestro archivo json
{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "susel",
  "license": "ISC"
}

11. creamos un archivo index.js y agregamos un saludo y luego lo ejecutamos
console.log("hola que estes bien");

12. instalamos express
npm i express 

13. al archivo index agregamos lo siguiente para crear nuestra primera api
const express = require('express')
const app = express()
const ip = process.env.IP || "0.0.0.0"
const port =  process.env.IP || 3000
bodyParser = require('body-parser').json();

app.get('/', function (req, res) {
  res.send('Hello World' )
})

app.get('/par',bodyParser, function (req, res) {
  res.send(req.body);
  console.log(req.body);
})
app.listen(port)

console.log(`se escucha en el puerto ${port}` );




