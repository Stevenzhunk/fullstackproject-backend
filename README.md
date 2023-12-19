# Apartado Backend del Proyecto Codo a Codo- Grupo 4 - Comisión 23573

Apartado del backend creado con NodeJs-Express para las operaciones CRUD del server-database

## Referencia API Temporal

#### Get all items

```http
  GET /Home
```

Devuelve Servidor Statico (Rutas Json para importar al PostMan en Discord)

#### Pasos a seguir

1.- Instalar las dependencias con el NPM run

```bash
  npm install
```

2.- Se Requiere la creación de un archivo . env que contiene los siguientes datos

| Parameter         | Type     | Description                                                                             |
| :---------------- | :------- | :-------------------------------------------------------------------------------------- |
| `LOCAL_USER`     | `string` | **Required**. usuario base de datos de Alwaysdata                                       |
| `LOCAL_PASSWORD` | `string` | **Required**. password base de datos de Alwaysdata                                      |
| `LOCAL_DATABASE` | `string` | **Required**. nombre base de datos de Alwaysdata                                        |
| `LOCAL_HOST `    | `string` | **Opcional**. host Alwaysdata                                                           |
| `PORT`            | `string` | **Opcional**. host local para correr el servidor ( Sino se especifica corre en el 3000) |

## Tech Stack

**Server:** Node, Express, MySQL

**Dependencias:** colors, cors, dotenv, express, mysql2, morgan, nodemon, ejs, express-ejs-layouts, bcrypt, multer, cookie-session, sequelize.
