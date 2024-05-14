[Fastify-App.postman_test_run.json](https://github.com/Mahmoud3mmar/Fastify-Server/files/15309092/Fastify-App.postman_test_run.json)# Fastify Server :

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



## Swagger Documentation
###
- **Description:** present the API documentation in JSON format using swagger UI.
- **URL:** [http://localhost:3000/docs](http://localhost:3000/docs)




## WebSocket 
### 
- **Description:**  establish a WebSocket connection and enable bidirectional communication between your client and server.
- **URL:** [ws://localhost:8080[(ws://localhost:8080)

## TestCases

[Uploading Fas{
	"id": "970a2490-df22-4bee-886c-964a66385c93",
	"name": "Fastify-App",
	"timestamp": "2024-05-14T13:34:22.166Z",
	"collection_id": "31110005-02969138-d5c5-4a94-a09d-003ac508da1b",
	"folder_id": 0,
	"environment_id": "0",
	"totalPass": 36,
	"delay": 0,
	"persist": true,
	"status": "finished",
	"startedAt": "2024-05-14T13:34:20.570Z",
	"totalFail": 0,
	"results": [
		{
			"id": "9fa4de52-4add-476b-9a80-b8af518398ee",
			"name": "GetAllUsers",
			"url": "http://localhost:3000/users",
			"time": 8,
			"responseCode": {
				"code": 201,
				"name": "Created"
			},
			"tests": {
				"Response status code is 201": true,
				"Response has the required fields": true,
				"Email is in a valid format": true,
				"Verify the response content type is application/json": true,
				"Validate _id and __v properties": true
			},
			"testPassFailCounts": {
				"Response status code is 201": {
					"pass": 2,
					"fail": 0
				},
				"Response has the required fields": {
					"pass": 2,
					"fail": 0
				},
				"Email is in a valid format": {
					"pass": 2,
					"fail": 0
				},
				"Verify the response content type is application/json": {
					"pass": 2,
					"fail": 0
				},
				"Validate _id and __v properties": {
					"pass": 2,
					"fail": 0
				}
			},
			"times": [
				41,
				8
			],
			"allTests": [
				{
					"Response status code is 201": true,
					"Response has the required fields": true,
					"Email is in a valid format": true,
					"Verify the response content type is application/json": true,
					"Validate _id and __v properties": true
				},
				{
					"Response status code is 201": true,
					"Response has the required fields": true,
					"Email is in a valid format": true,
					"Verify the response content type is application/json": true,
					"Validate _id and __v properties": true
				}
			]
		},
		{
			"id": "091bfec5-51bc-4e9d-b8e0-60efdcc25289",
			"name": "CreateUser",
			"url": "http://localhost:3000/users",
			"time": 10,
			"responseCode": {
				"code": 201,
				"name": "Created"
			},
			"tests": {
				"Response status code is 201": true,
				"Response has the required fields - firstName, lastName, and email": true,
				"Email is in a valid format": true,
				"FirstName and lastName must be non-empty strings": true
			},
			"testPassFailCounts": {
				"Response status code is 201": {
					"pass": 2,
					"fail": 0
				},
				"Response has the required fields - firstName, lastName, and email": {
					"pass": 2,
					"fail": 0
				},
				"Email is in a valid format": {
					"pass": 2,
					"fail": 0
				},
				"FirstName and lastName must be non-empty strings": {
					"pass": 2,
					"fail": 0
				}
			},
			"times": [
				36,
				10
			],
			"allTests": [
				{
					"Response status code is 201": true,
					"Response has the required fields - firstName, lastName, and email": true,
					"Email is in a valid format": true,
					"FirstName and lastName must be non-empty strings": true
				},
				{
					"Response status code is 201": true,
					"Response has the required fields - firstName, lastName, and email": true,
					"Email is in a valid format": true,
					"FirstName and lastName must be non-empty strings": true
				}
			]
		},
		{
			"id": "cf34160d-0c79-4f71-86f0-8dfc5f12fec9",
			"name": "UpdateUser",
			"url": "http://localhost:3000/users/664258bb020a11e78df81c58",
			"time": 7,
			"responseCode": {
				"code": 201,
				"name": "Created"
			},
			"tests": {
				"Response status code is 201": true,
				"Response has the required fields": true,
				"Acknowledged field is set to true": true,
				"ModifiedCount is a non-negative integer": true
			},
			"testPassFailCounts": {
				"Response status code is 201": {
					"pass": 2,
					"fail": 0
				},
				"Response has the required fields": {
					"pass": 2,
					"fail": 0
				},
				"Acknowledged field is set to true": {
					"pass": 2,
					"fail": 0
				},
				"ModifiedCount is a non-negative integer": {
					"pass": 2,
					"fail": 0
				}
			},
			"times": [
				11,
				7
			],
			"allTests": [
				{
					"Response status code is 201": true,
					"Response has the required fields": true,
					"Acknowledged field is set to true": true,
					"ModifiedCount is a non-negative integer": true
				},
				{
					"Response status code is 201": true,
					"Response has the required fields": true,
					"Acknowledged field is set to true": true,
					"ModifiedCount is a non-negative integer": true
				}
			]
		},
		{
			"id": "2109a266-6acd-40bf-95c8-5b918dd9b854",
			"name": "DeleteUser",
			"url": "http://localhost:3000/users/664258ba020a11e78df81c55",
			"time": 10,
			"responseCode": {
				"code": 201,
				"name": "Created"
			},
			"tests": {
				"Response status code is 201": true,
				"Response has the required fields - acknowledged and deletedCount": true,
				"Acknowledged is a boolean value": true,
				"DeletedCount is a non-negative integer": true,
				"Acknowledged field is set to true": true
			},
			"testPassFailCounts": {
				"Response status code is 201": {
					"pass": 2,
					"fail": 0
				},
				"Response has the required fields - acknowledged and deletedCount": {
					"pass": 2,
					"fail": 0
				},
				"Acknowledged is a boolean value": {
					"pass": 2,
					"fail": 0
				},
				"DeletedCount is a non-negative integer": {
					"pass": 2,
					"fail": 0
				},
				"Acknowledged field is set to true": {
					"pass": 2,
					"fail": 0
				}
			},
			"times": [
				14,
				10
			],
			"allTests": [
				{
					"Response status code is 201": true,
					"Response has the required fields - acknowledged and deletedCount": true,
					"Acknowledged is a boolean value": true,
					"DeletedCount is a non-negative integer": true,
					"Acknowledged field is set to true": true
				},
				{
					"Response status code is 201": true,
					"Response has the required fields - acknowledged and deletedCount": true,
					"Acknowledged is a boolean value": true,
					"DeletedCount is a non-negative integer": true,
					"Acknowledged field is set to true": true
				}
			]
		}
	],
	"count": 2,
	"totalTime": 137,
	"collection": {
		"requests": [
			{
				"id": "9fa4de52-4add-476b-9a80-b8af518398ee",
				"method": "GET"
			},
			{
				"id": "091bfec5-51bc-4e9d-b8e0-60efdcc25289",
				"method": "POST"
			},
			{
				"id": "cf34160d-0c79-4f71-86f0-8dfc5f12fec9",
				"method": "PATCH"
			},
			{
				"id": "2109a266-6acd-40bf-95c8-5b918dd9b854",
				"method": "DELETE"
			}
		]
	}
}tify-App.postman_test_run.json…]()

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

