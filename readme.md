# Aplicación de Recetas

Esta es una aplicación de recetas que permite a los usuarios registrarse, iniciar sesión, crear y ver recetas. La aplicación está dividida en dos partes: el frontend, construido con React y Vite, y el backend, construido con Express y MongoDB.

## Características

- Registro de usuarios: Los usuarios pueden registrarse en la aplicación proporcionando un nombre de usuario y contraseña.
- Inicio de sesión de usuarios: Los usuarios registrados pueden iniciar sesión en la aplicación utilizando su nombre de usuario y contraseña.
- Creación de recetas: Los usuarios autenticados pueden crear nuevas recetas proporcionando un título, descripción, ingredientes y pasos.
- Visualización de recetas: Los usuarios pueden ver las recetas creadas por ellos mismos y por otros usuarios en la aplicación.
- Autenticación de usuarios: La aplicación utiliza un sistema de autenticación basado en tokens JWT (JSON Web Tokens) para proteger las rutas y asegurar que solo los usuarios autenticados puedan acceder a las funcionalidades de creación y visualización de recetas.

## Tecnologías utilizadas

- Frontend: React, Vite, React Router, Axios
- Backend: Express, MongoDB, Mongoose, Passport, JSON Web Tokens (JWT)

## Configuración

### Frontend

1. Instala las dependencias del frontend:

    ```bash
    cd client
    npm install
    ```

2. Configura el archivo de variables de entorno .env en la carpeta client con la URL de tu backend:

    ```bash
    # .env
    VITE_API_URL=<URL_BACKEND>
    ```

3. Inicia el servidor de desarrollo del frontend:

    ```bash
    cd server
    npm install
    ```
La aplicación frontend estará disponible en `http://localhost:3001`

### Backend

1. Instala las dependencias del backend

    ```bash
    cd server
    npm install
    ```

2. Configura el archivo de variables de entorno .env en la carpeta server con la configuración de tu base de datos MongoDB y la clave secreta para los tokens JWT:

    ```bash
    # .env
    MONGO_URI=<URL_MONGODB>
    JWT_SECRET=<CLAVE_SECRETA_JWT>
    ```

3. Inicia el servidor de desarrollod del backend:

    ```bash
    cd server
    npm run dev
    ```
El servidor backend estará disponible en `http://localhost:3000`.

### Contribución

Si quieres contribuir a esta aplicación, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama (git checkout -b feature/nueva-caracteristica).
3. Realiza tus cambios y haz commit de los mismos (git commit -m "Agrega nueva característica").
4. Haz push de los cambios a tu repositorio fork (git push origin feature/nueva-caracteristica).
5. Abre un Pull Request en este repositorio.

