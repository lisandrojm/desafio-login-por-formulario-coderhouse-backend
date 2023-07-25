/* ************************************************************************** */
/* /src/components/login/index.js - Contiene las rutas y controladores de  
loginController.js. */
/* ************************************************************************** */

/* Importar el módulo de enrutador de Express */
const { Router } = require('express');

/* Importar el controlador de login */
const loginController = require('./loginController/loginController');

module.exports = (app) => {
  /* Crear una nueva instancia del enrutador de Express */
  const router = new Router();

  /* Registrar el enrutador en la aplicación principal */
  app.use('/api/sessions', router);

  /* Definir las rutas y asignar los controladores correspondientes */
  router.post('/login', loginController.login);
  router.get('/logout', loginController.logout);
};
