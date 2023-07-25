/* ************************************************************************** */
/* /src/components/users/index.js - Contiene las rutas y controladores de 
usersController.js. */
/* ************************************************************************** */

/* Importar el módulo de enrutador de Express */
const { Router } = require('express');

/* Importar el controlador de usuarios */
const usersController = require('./usersController/usersController');

module.exports = (app) => {
  /*  Crear una nueva instancia del enrutador de Express */
  const router = new Router();

  /* Registrar el enrutador en la aplicación principal */
  app.use('/api/sessions/register', router);

  /* Definir las rutas y asgnar los controladores correspondientes */
  router.post('/', usersController.addUser);
  /* Obtener todos los usuarios */
  router.get('/', usersController.getUsers);
  /* Obtener un usuario por ID */
  router.get('/:uid', usersController.getUserById);
  /* Modificar un usuario desde ID */
  router.put('/:uid', usersController.updateUser);
  /* Eliminar un usuario */
  router.delete('/:uid', usersController.deleteUser);
};
