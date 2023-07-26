# DESAFÍO ENTREGABLE - Login por formulario - Coderhouse/Backend

# Primer login por formulario

Este repositorio contiene la implementación del primer login por formulario. Un sistema de login completo utilizando router , motor de plantillas
Handlebars y base de datos MongoDB para usuarios y sesiones.

Se cuenta con una estructura de router para sessions en /api/sessions/ el cual contiene métodos pararegistrar a un usuario y para su respectivo login.

Cuenta además con un router de vistas en la ruta base / para llevar al formulario de login, de registro y de perfil.

## Requisitos

Asegúrate de tener los siguientes requisitos instalados en tu entorno de desarrollo:

- Node.js
- MongoDB

## Instrucciones de instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/lisandrojm/desafio_primera-practica-integradora
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd desafio_primera-practica-integradora
   ```

3. Instala las dependencias del proyecto ejecutando el siguiente comando:

   ```bash
   npm install
   ```

4. Configura la conexión a la base de datos MongoDB en el archivo `.env`. Puedes copiar el archivo `.env.example` y renombrarlo a `.env`, luego actualiza los valores con tu configuración:

   ```bash
   cp .env.example .env
   ```

   Asegúrate de tener MongoDB en ejecución y la URL de conexión correcta en el archivo `.env`.

5. Inicia la aplicación con el siguiente comando:

   ```bash
   npm start
   ```

   Esto iniciará el servidor Node.js y estará escuchando en el puerto especificado en el archivo `.env`.

6. Accede a la aplicación en tu navegador web ingresando la siguiente URL:

   ```
   http://localhost:<PUERTO_DE_LA_APP>
   ```

   Asegúrate de reemplazar `<PUERTO_DE_LA_APP>` con el número de puerto especificado en el archivo `.env`.

7. Ahora podrás utilizar la vista de chat en la aplicación.

## Video Test Chat

(VIDEO)

## Estructura del proyecto (directorios relevantes para el desafío)

Aquí tienes la estructura del proyecto con descripciones para cada directorio:

El proyecto sigue la siguiente estructura de directorios:

- `/src`: Contiene el archivo principal de la aplicación (`index.js`) que inicia el servidor y configura las rutas. Es el punto de entrada de la aplicación.

- `/src/components/handlebars`: Contiene los archivos relacionados con la funcionalidad de Handlebars.

  - `/src/components/handlebars/index.js`: Archivo de entrada de Handlebars que exporta los componentes relacionados.
  - `/src/components/handlebars/handlebarsController/handlebarsController.js`: Controlador de Handlebars para gestionar la lógica de negocio.
  - `/src/components/handlebars/handlebarsServices/productsServices.js`: Servicios de Handlebars para interactuar con la capa de datos relacionados con los productos.

- `/src/components/users`: Contiene los archivos relacionados con la funcionalidad de los usuarios.

  - `/src/components/users/index.js`: Archivo de entrada de users que exporta los componentes relacionados.
  - `/src/components/users/usersController/usersController.js`: Controlador de usuarios para gestionar la lógica de negocio.
  - `/src/components/messages/usersServices/usersServices.js`: Servicios de usuarios para interactuar con la capa de datos relacionados con los mensajes.

- `/src/config`: Contiene los archivos de configuración de la aplicación.

  - `/src/config/index.js`: Archivo de configuración que exporta variables de entorno y configuraciones generales.
  - `/src/config/mongo.js`: Archivo de configuración de Mongoose para establecer la conexión a la base de datos MongoDB.

- `/src/models`: Contiene los modelos de datos de la aplicación.

  - `/src/models/users.js`: Modelo de mensajes definido con Mongoose para representar los datos de los usuarios.

- `/src/public`: Contiene los archivos públicos de la aplicación, como estilos CSS, imágenes y scripts JavaScript.

- `/src/routes`: Contiene los archivos de definición de rutas de la aplicación.

  - `/src/routes/index.js`: Archivo de definición de rutas que exporta las rutas para los mensajes.

- `/src/utils/auth`: Contiene los archivos relacionados con la configuración de la autentificación.

  - `/src/utils/auth/auth.js`: Archivo de configuración del middleware de autentificación de rutas públicas y privadas.

- `/src/views/layouts/main.handlebars`: Contiene el archivo main de plantillas HTML utilizando Handlebars.

- `/src/views/login.handlebars`: Archivo de plantilla HTML para la vista de login.

- `/src/views/register.handlebars`: Archivo de plantilla HTML para la vista de registro.

- `/src/views/dashboard.handlebars`: Archivo de plantilla HTML para la vista de admin.

- `/src/views/profile.handlebars`: Archivo de plantilla HTML para la vista de perfil de usuario.

- `/src/views/products.handlebars`: Archivo de plantilla HTML para la vista de productos.

- `/src/views/carts.handlebars`: Archivo de plantilla HTML para la vista de carritos.

- `/.env.example`: Archivo de ejemplo que muestra la estructura y variables de entorno requeridas para la configuración de la aplicación.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- Express.js (v4.18.2): Framework de Node.js para construir aplicaciones web.
- UUID (v9.0.0): Biblioteca para generar identificadores únicos.
- Cors (v2.8.5): Middleware para permitir peticiones HTTP entre diferentes dominios.
- Dotenv (v16.3.1): Carga variables de entorno desde un archivo `.env`.
- Express-handlebars (v7.0.7): Motor de plantillas para Express.js.
- MongoDB (v5.6.0): Driver de MongoDB para Node.js.
- Mongoose (v7.3.1): Modelado de objetos de MongoDB para Node.js.
- Multer (v1.4.5-lts.1): Middleware para manejar datos de formulario multipart/form-data.
- Socket.io (v4.6.2): Biblioteca para la comunicación en tiempo real basada en WebSockets.
- Sweetalert2 (v11.7.12): Biblioteca para mostrar mensajes y alertas personalizadas.
- connect-mongo (v5.0.0): Middleware para almacenar sesiones de Express.js en MongoDB.
- cookie-parser (v1.4.6): Middleware para analizar cookies en las solicitudes de Express.js.
- express-session (v1.17.3): Middleware para manejar sesiones en Express.js.
- mongoose-paginate-v2 (v1.7.1): Plugin de paginación para Mongoose.

## DevDependencies

El proyecto utiliza las siguientes devDependencies:

- Nodemon (v2.0.22): Utilidad que monitoriza cambios en los archivos y reinicia automáticamente la aplicación.

Estas dependencias pueden ser instaladas ejecutando el comando `npm install` en el directorio del proyecto.

## Postman Collections

- En la carpeta `postman_collections`, encontrarás los archivos necesarios para importar las colecciones en Postman y realizar pruebas en el proyecto. Las colecciones proporcionan ejemplos de solicitudes HTTP para interactuar con la API y probar su funcionalidad.
