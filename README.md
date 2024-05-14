
## Overview

The Fastify-App is a RESTful API server built using the Fastify framework in Node.js.
It provides endpoints for managing user data, including creating, reading, updating, and deleting user records.
The API follows best practices for RESTful architecture, utilizing clear and intuitive endpoint URLs and HTTP methods. 
Each endpoint is documented with Swagger documentation to facilitate ease of use and integration. Additionally, 
the Fastify-App is designed  to handle concurrent requests efficiently.

## Dependencies
- `mongoose`: MongoDB object modeling tool for Node.js.
- `Fastify`: a web framework for Node.js .
- `nodemon`: Node.js based applications by automatically restarting the node application when file changes in the directory are detected..
- `dotenv`: Loads environment variables from a `.env` file.
- `ws`: package provides a simple WebSocket client and server implementation for Node.js.
- `@fastify/swagger-ui:`: This plugin provides a UI interface for viewing Swagger documentation.
- 
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



## Swagger Documentation
###
- **Description:** present the API documentation in JSON format using swagger UI.
- **URL:** [http://localhost:3000/docs](http://localhost:3000/docs)




## WebSocket 
### 
- **Description:**  establish a WebSocket connection and enable bidirectional communication between your client and server.
- **URL:** [ws://localhost:8080[(ws://localhost:8080)

## TestCases
### using postman

![Screenshot 2024-05-14 163739](https://github.com/Mahmoud3mmar/Fastify-Server/assets/55957447/3abbc24b-321c-466e-abc2-2c8f68b1fe7a)

![Screenshot 2024-05-14 163806](https://github.com/Mahmoud3mmar/Fastify-Server/assets/55957447/f5e17e37-70e8-4660-ab45-9a642fa52996)





## Project Structure
```
├── src
│   └── modules
│   │    └── User
│   │        ├── Models
│   │        │   └── user.model.js
│   │        ├── Routes
│   │        │   └── users.routes.js
│   │        └── Services
│   │            └── user.service.js
│   │
│   ├── Utils
│   │   ├── Error.Handler.js
│   │   └── Socket.Handler.ts 
│   └── db
│       └── database.ts
│       
├── .env.example
├── package.json
└── README.md
```

- **Models**: Defines the Mongoose schema for the "User" collection.
- **Services**: This directory holds the service layer functions that interact with the database or perform business logic related to users.
- **Routes**: Defines the API routes for the brand endpoints.
- **Utils**: Contains utility functions, such as error handling.


## Instructions

1. **Important Step**

   - Ensure you have Node.js installed on your system. You can download it from the official Node.js website if not already installed.
     
  

2. **Install the necessary dependencies**

   - Run the command [npm init -y] to initialize a new Node.js project with default settings.
 
   - Run the command [npm install ws nodemon dotenv @fastify/swagger-ui Fastify mongoose] .
  

3. **Create a .env file:**

   - Create a new file named .env in your project directory.
   - Inside the .env file, define the environement variables with the desired values like the .env.example file.
     
4. **Run the code**

   - Open your terminal or command prompt.
   - Navigate to your project directory if you're not already there.
   - Run the command [nodemon] to start the WebSocket server.
   - If everything is set up correctly, you should see a message indicating that the server is connected to DB & WebSocket server is listening on the specified port.

5. **Testing**
   - You can test the crud operations by  using postman on the specified  URL & ROUTE while making sure a secure and successful connection to DB. 
   - You can test the WebSocket server using WebSocket integration by  using postman on the specified WebSocket URL (ws://localhost:**** by default).
   - Send messages to the server and verify that it receives and responds to them correctly.

   
This documentation provides an overview of the Brand Transformation API, its endpoints, how to run the project, project structure, and dependencies. It serves as a guide for developers and users to understand and interact with the API.

