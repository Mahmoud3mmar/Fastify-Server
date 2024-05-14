# Fastify Server :

## Overview

The Fastify-App is a RESTful API server built using the Fastify framework in Node.js.
It provides endpoints for managing user data, including creating, reading, updating, and deleting user records.
The API follows best practices for RESTful architecture, utilizing clear and intuitive endpoint URLs and HTTP methods. 
Each endpoint is documented with Swagger documentation to facilitate ease of use and integration. Additionally, 
the Fastify-App is designed  to handle concurrent requests efficiently.


## Endpoints

## GET
### GetAllUsers
- **Description:** Retrieves all users from the server.
- **URL:** [http://localhost:3000/users](http://localhost:3000/users)

## POST
### CreateUser
- **Description:** Creates a new user on the server.
- **URL:** [http://localhost:3000/users](http://localhost:3000/users)
- **Body:**
  - **Format:** raw (json)
  - **Content:**
    ```json
    {
        "firstName": "Monty",
        "lastName": "Ebert",
        "email": "Raymond66@gmail.com"
    }
    ```

## PATCH
### UpdateUser
- **Description:** Updates an existing user on the server.
- **URL:** [http://localhost:3000/users/664258bb020a11e78df81c58](http://localhost:3000/users/664258bb020a11e78df81c58)
- **Body:**
  - **Format:** raw (json)
  - **Content:**
    ```json
    {
        "firstName": "Oswaldo",
        "lastName": "Pouros",
        "email": "Keshaun_Parker@hotmail.com"
    }
    ```

## DELETE
### DeleteUser
- **Description:** Deletes a user from the server.
- **URL:** [http://localhost:3000/users/664258ba020a11e78df81c55](http://localhost:3000/users/664258ba020a11e78df81c55)


## Project Structure
```
├── src
│   └── modules
│   │    └── User
│   │        ├── Controllers
│   │        │   └── users.controller.js
│   │        ├── Models
│   │        │   └── user.model.js
│   │        ├── Routes
│   │        │   └── users.routes.js
│   │        └── Services
│   │            └── user.service.js
│   │
│   ├── Utils
│   │   ├── ErrorHandler.js
│   │   
│   └── db
│       └── database.ts
│       
├── .env.example
├── package.json
└── README.md
```



- **Controllers**: Contains the controller functions for handling HTTP requests.
- **Models**: Defines the Mongoose schema for the "brands" collection.
- **Services**: This directory holds the service layer functions that interact with the database or perform business logic related to users.
- **Routes**: Defines the API routes for the brand endpoints.
- **Utils**: Contains utility functions, such as error handling.

## Dependencies
- `mongoose`: MongoDB object modeling tool for Node.js.
- `Fastify`: a web framework for Node.js s.
- `dotenv`: Loads environment variables from a `.env` file.
- `ws`: package provides a simple WebSocket client and server implementation for Node.js.
- `@fastify/swagger-ui:`: This plugin provides a UI interface for viewing Swagger documentation.


This documentation provides an overview of the Brand Transformation API, its endpoints, how to run the project, project structure, and dependencies. It serves as a guide for developers and users to understand and interact with the API.

