/**
 * Key compoents of an API
 *  1. Request (provided by the client/user)
 *      - types of requests can be: GET, POST, PUT... etc.
 *  2. Response (provided by the backend)
 *  - always raturns a response code: 200s are sucessful
 *  - 400s failed due to client error
 * 
 */


// Importing database file
const databaseHandler = require('./index')

// Importing the Express package (aka module/library/framework)
const express = require('express');

// Initialize Express API
const api = express();
const port = 3000

// Call the GET method to handle GET API requests
// Specify in a string, the endpoint of the API.
// An endpoint is the path of the URL that allows us to access the API

api.get('/users', async function(request, response) {
    const users = await databaseHandler.readUserDocuments()
    response.send(users)
})

// Listen to the API port
api.listen(port, function() {
    console.log(`API is now listening on port: ${port}`)
})