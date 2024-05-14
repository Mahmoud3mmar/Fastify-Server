// import express from 'express'
import ConnectToDB from './db/dbconnection.js'
// import v1Router from './src/Routers/v1.routes.js'
// import userRouter from './src/modules/users/routers/user.router.js'
// import CompanyRouter from './src/modules/Company/routers/company.router.js'
// import jobRouter from './src/modules/job/routers/job.router.js'
// import ApplicationRouter from './src/modules/application/routers/application.router.js'

import  dotenv  from 'dotenv'

import Fastify from 'fastify'
import cors from '@fastify/cors'

import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import fastifySwaggerAutoLoad from '@fastify/autoload';
import userRoutes from './src/modules/users/routers/user.router.js';
import wss from './src/utils/Socket.Handler.js';

// import { userRoutes } from './src/modules/job/routers/job.router.js';
// import fastifyEnv from 'fastify/env';
dotenv.config()


const fastify = Fastify({
    logger: true
})



// // Register plugins
// fastify.register(fastifySwagger, {
//     routePrefix: '/documentation',
//     swagger: {
//         info: {
//             title: 'Fastify CRUD API with Swagger Documentation',
//             description: 'API Documentation for Fastify CRUD operations',
//             version: '1.0.0',
//         },
//         externalDocs: {
//             url: 'https://swagger.io',
//             description: 'Find more info here',
//         },
//         consumes: ['application/json'],
//         produces: ['application/json'],
//     },
//     exposeRoute: true,
// });

// fastify.register(fastifyEnv, {
//     schema: {
//         type: 'object',
//         required: [PORT],
//         properties: {
//             PORT: {
//                 type: 'string',
//                 default: '3000', // Default port if not provided in .env
//             },
//             // Add more environment variables as needed
//         },
//     },
//     options:{

//     },
//     dotenv: true,
// });



fastify.register(fastifySwagger, {})
fastify.register(fastifySwaggerUI, {
  // TODO:  set your settings
  routePrefix: '/docs',
  swagger: {
      info: {
          title: 'My FirstAPP Documentation',
          description: 'My FirstApp Backend Documentation description',
          version: '0.1.0',
          termsOfService: 'https://mywebsite.io/tos',
          contact: {
              name: 'John Doe',
              url: 'https://www.johndoe.com',
              email: 'john.doe@email.com'
          }
      },
      externalDocs: {
          url: 'https://www.johndoe.com/api/',
          description: 'Find more info here'
      },
      host: '127.0.0.1:3000',
      basePath: '',
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [{
          name: 'User',
          description: 'User\'s API'
      }, ],
      definitions: {
          User: {
              type: 'object',
              required: ['id', 'email'],
              properties: {
                  id: {
                      type: 'number',
                      format: 'uuid'
                  },
                  firstName: {
                      type: 'string'
                  },
                  lastName: {
                      type: 'string'
                  },
                  email: {
                      type: 'string',
                      format: 'email'
                  }
              }
          },
      }
  },
  uiConfig: {
      docExpansion: 'none', // expand/not all the documentations none|list|full
      deepLinking: true
  },
  uiHooks: {
      onRequest: function(request, reply, next) {
          next()
      },
      preHandler: function(request, reply, next) {
          next()
      }
  },
  staticCSP: false,
  transformStaticCSP: (header) => header,
  exposeRoute: true
})


// This loads and sets fastify/cors
// fastify.register(import('@fastify/cors'), {
//   // TODO:  enable CORS as as your needs
//   origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://localhost:3000'],
//   methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
// })

  


const PORT = process.env.PORT ;


ConnectToDB()
// Run the server!
fastify.listen({ port: PORT }, (err, address) => {
    if (err) throw err
    console.log(`Server is listening on port ${PORT}!`)
    wss
    fastify.swagger()
})

  
fastify.register(userRoutes);
  /* findAll
    GET /users/
    returns all the users
//   **/
// fastify.route({
//     url: '/users',
//     method: ['GET'],
//     // request and response schema
//     schema: {
//       summary: 'Returns all Users',
//       description: 'Returns all the user\'s data',
//       tags: ['User'],
//       // the response needs to be an object with an `hello` property of type 'string'
//       response: {
//         200: {
//           description: 'Returns all the users',
//           type: 'array',
//           items: {
//             type: 'object',
//             properties: {
              
//               firstName: {
//                 type: 'string'
//               },
//               lastName: {
//                 type: 'string'
//               },
//               email: {
//                 type: 'string',
//                 format: 'email'
//               }
//             }
//           }
//         },
//         404: {
//           description: 'User not found',
//           type: 'object',
//           properties: {
//             code: {
//               type: 'string'
//             },
//             message: {
//               type: 'string'
//             }
//           }
//         }
//       }
//     },
//     // called just before the request handler
//     preHandler: async (req, res) => {
//       /*
//       TODO: uncomment this to add your custom pre-handler
//       reply.code(403).send({
//         code: 'FORBIDDEN',
//         message: `You have no access to users resource`
//       })
//       return null
//       **/
//     },
//     // the function that will handle this request
//     handler: async (req, res) => {
//         // const { id } = req.params;
    
//         // // Check if the provided userId matches the logged-in user
//         // if (userId !== id) {
//         //     throw new AppError('Unauthorized: Only the owner of the account can get his account data', 401);
//         // }
    
//         // Fetch user data only if the provided userId matches the decoded user ID from the token
//         const FoundUser = await UserModel.find()
    
//         if (FoundUser) {
//             return FoundUser;
//         }
    
//         throw new AppError('User not found', 404);
//     }
// })


// fastify.route({
//     url: '/users',
//     method: ['POST'],
//     // request and response schema
//     schema: {
//       summary: 'Creates a new User',
//       description: 'Creates a new user with provided data',
//       tags: ['User'],
//       body: {
//         type: 'object',
//         properties: {
//           firstName: { type: 'string' },
//           lastName: { type: 'string' },
//           email: { type: 'string', format: 'email' }
//         },
//         required: ['firstName', 'lastName', 'email']
//       },
//       response: {
//         201: {
//           description: 'User created successfully',
//           type: 'object',
//           properties: {
//             id: { type: 'string' },
//             firstName: { type: 'string' },
//             lastName: { type: 'string' },
//             email: { type: 'string' }
//           }
//         }
//       }
//     },
//     // called just before the request handler
//     preHandler: async (req, res) => {
//       /*
//       TODO: You might want to add some pre-handler logic here, for example, authentication or validation checks.
//       If you uncomment this section, make sure to handle the response properly.
//       res.code(403).send({
//         code: 'FORBIDDEN',
//         message: `You have no access to users resource`
//       });
//       return null;
//       */
//     },
//     // the function that will handle this request
//     handler: async (req, res) => {
//         const {
//             firstName,
//             lastName,
//             email,
//         } = req.body;
//         try {
//           // Assuming UserModel is a Mongoose model or something similar
//           const user = await UserModel.create({ firstName, lastName, email });
//           res.status(201).send(user);
//         } catch (error) {
//           res.status(500).send({ error: 'Internal Server Error' });
//         }
//     }
// })
// app.use(express.json())
// app.use(express.static('uploads'))
// app.use('/users',userRouter)
// app.use('/jobs',jobRouter)
// app.use('/companies',CompanyRouter)

// app.use('/applications/:companyId/:date',ApplicationRouter)



// app.use('/api/v1',v1Router)
// app.get('/', (req, res) => res.send('Hello World!'))







// app.use((error,req,res,next)=>{
//     const {message,status}=error
//     res.status(status ||500).json({message})
// })




// ConnectToDB()
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))