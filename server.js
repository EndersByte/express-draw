let express = require('express')//inserting the module
let app = express()//calling the class
let server = app.listen(3000)// starting the server
app.use(express.static ('public'))//sending the dat to the client
console.log('server running and data sended')