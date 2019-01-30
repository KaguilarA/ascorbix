const express = require('express'),
  morgan = require('morgan'),
  app = express(),
  port = 3000,
  routes = require('./route');

let componentsRoute = `../components/`;

// Settings

app.set(`appName`, `Ascorbix`);
app.set(`view engine`, `pug`);

// Middlewares

app.use(morgan(`dev`));
app.use(routes);


app.listen(port, sayHelloToMyLittleFriend());

function sayHelloToMyLittleFriend() {
  console.log(`Servidor levantado en el puerto ${port}`);
  console.log(`El nombre de la app es ${app.get('appName')}`);
}