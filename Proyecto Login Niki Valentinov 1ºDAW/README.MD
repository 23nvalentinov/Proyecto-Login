# Proyecto de Aplicación Web

## Descripción

Este proyecto es una aplicación web simple que permite a los usuarios registrarse e iniciar sesión. Utiliza Node.js con Express como framework de servidor, MongoDB para la base de datos, y EJS como motor de plantillas para renderizar las vistas en el servidor.


## Estructura del Proyecto

- `public/`: Contiene archivos estáticos como `style.css` para el estilo de la aplicación.
- `src/`: Contiene los archivos JavaScript principales de la aplicación.
  - `config.js`: Archivo de configuración de la aplicación.
  - `index.js`: Punto de entrada principal para la lógica de la aplicación.
- `views/`: Contiene los archivos de plantillas EJS.
  - `home.ejs`: Plantilla para la página de inicio.
  - `login.ejs`: Plantilla para la página de inicio de sesión.
  - `signup.ejs`: Plantilla para la página de registro.
- `package.json` y `package-lock.json`: Archivos esenciales para la gestión de dependencias del proyecto.


## Dependencias

Las principales dependencias utilizadas en este proyecto son:

- `bcrypt`: Para el hashing de contraseñas.
- `ejs`: Motor de plantillas para Node.js.
- `express`: Framework web para Node.js.
- `mongoose`: Herramienta de modelado de objetos para MongoDB.

## Instalación y Configuración

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:
 

1. **Instalar las dependencias:**
   npm install
   
2. **Configurar la base de datos:**
   Configura la conexión a la base de datos en el archivo `config.js`.

3. **Ejecutar la aplicación:**
   npm start
   
4. **Acceder a la aplicación:**
   Abre tu navegador y navega a `http://localhost:5000`.



## Proceso de Desarrollo

1. **Configuración del Entorno:**
   - Primero instalé Node.js y MongoDB en mi máquina local y comencé un nuevo proyecto de Node.js con `npm init`.

2. **Instalación de Dependencias:**
   - Instalé las dependencias necesarias usando `npm install bcrypt ejs express mongoose`.

3. **Estructura del Proyecto:**
   - Creé las carpetas `public`, `src` y `views` para organizar los archivos estáticos, la lógica de la aplicación y las plantillas, respectivamente.

4. **Desarrollo de Funcionalidades:**
   - Configuré el servidor Express en `index.js`.
   - Configuré la conexión a MongoDB usando Mongoose en `config.js`.
   - Creé las rutas para el registro e inicio de sesión de usuarios.
   - Implementé las plantillas EJS para las vistas de registro, inicio de sesión y página de inicio.

5. **Estilo de la Aplicación:**
   - Finalmente añadí estilos básicos en `public/style.css` para mejorar la apariencia de la aplicación.



## Recursos Utilizados

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

