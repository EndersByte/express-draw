let express = require('express')//inserting the modules
let socket = require('socket.io')

let app = express()//calling the class

let server = app.listen(3000)// starting the server
app.use(express.static('public'))//sending the dat to the client

let io = socket(server)//function that handles server/sockets events

io.socket.on('connection',newConnection)// execute newConnection when that occuors

function newConnection(){
console.log('server running and data sended')
}

