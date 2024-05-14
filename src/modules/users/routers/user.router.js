import { CreateUsersData, DeleteUsersData, GetUsersData, UpdateUsersData } from "../Services/User.Service.js";

/**
 * Define all routes related to user operations including getting, creating, updating, and deleting users.
 *
 * @param {Object} fastify - The fastify instance for setting up routes.
 * @param {Object} options - Any options passed to the function.
 */
async function userRoutes(fastify, options) {
    // Get all users
    /**
     * Get all users
     * @route GET /users
     * @tags User
     * @response 200 - Successful response
     * @responseContent {Array.<Object>} 200.application/json
     * @responseContent {Object} 404.application/json
     */
    fastify.get('/users', {
        schema: {
            summary: 'Get all users',
            description: 'Retrieve all user data',
            tags: ['User'],
            response: {
                200: {
                    description: 'Successful response',
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            firstName: { type: 'string' },
                            lastName: { type: 'string' },
                            email: { type: 'string', format: 'email' }
                        }
                    }
                },
                404: {
                    description: 'User not found',
                    type: 'object',
                    properties: {
                        code: { type: 'string' },
                        message: { type: 'string' }
                    }
                }
            }
        },
        handler: GetUsersData
    });

    // Create a new user
    /**
     * Create a new user
     * @route POST /users
     * @tags User
     * @requestBody {Object} application/json
     * @response 201 - User Created
     * @response 409 - User exists
     */
    fastify.post('/users', {
        schema: {
            summary: 'Create a new user',
            description: 'Create a new user record',
            tags: ['User'],
            body: {
                type: 'object',
                properties: {
                    firstName: { type: 'string' },
                    lastName: { type: 'string' },
                    email: { type: 'string', format: 'email' }
                },
                required: ['firstName', 'lastName', 'email']
            },
            response: {
                201: {
                    description: 'User Created',
                    type: 'object',
                    properties: {
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        email: { type: 'string', format: 'email' }
                    }
                },
                409: {
                    description: 'User exists',
                    type: 'object',
                    properties: {
                        code: { type: 'string' },
                        message: { type: 'string' }
                    }
                }
            }
        },
        handler: CreateUsersData
    });

    // Update user data by ID
    /**
     * Update user data by ID
     * @route PATCH /users/:id
     * @tags User
     * @param {string} id.path - User ID
     * @requestBody {Object} application/json
     * @response 200 - User Updated Successfully
     */
    fastify.patch('/users/:id', {
        schema: {
            summary: 'Update user data by ID',
            tags: ['User'],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'string', description: 'User ID' }
                }
            },
            body: {
                type: 'object',
                properties: {
                    firstName: { type: 'string' },
                    lastName: { type: 'string' },
                    email: { type: 'string', format: 'email' }
                },
                required: ['firstName', 'lastName', 'email']
            },
            response: {
                200: {
                    description: 'User Updated Successfully',
                    type: 'object',
                    properties: {
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        email: { type: 'string', format: 'email' }
                    }
                }
            }
        },
        handler: UpdateUsersData
    });

    // Delete user data by ID
    /**
     * Delete user data by ID
     * @route DELETE /users/:id
     * @tags User
     * @param {string} id.path - User ID
     * @response 204 - User Deleted Successfully
     * @response 404 - User not found
     */
    fastify.delete('/users/:id', {
        schema: {
            summary: 'Delete user data by ID',
            tags: ['User'],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'string', description: 'User ID' }
                }
            },
            response: {
                204: {
                    description: 'User Deleted Successfully',
                    type: 'object',
                    properties: {
                        message: { type: 'string', default: 'User deleted successfully' }
                    }
                },
                404: {
                    description: 'User not found',
                    type: 'object',
                    properties: {
                        error: { type: 'string', default: 'User not found' }
                    }
                }
            }
        },
        handler: DeleteUsersData
    });
}

export default userRoutes;