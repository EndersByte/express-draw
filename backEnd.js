let express = require('express')
let app = express()
// importa express e transforma app em função

let server = app.listen( 5500, () => {
    let port = server.address().port;
    console.log(`Example app listening at http://localhost:${port}`);
  })
  //declara o server usando o app

  app.use(express.static('public'));
//sending the data to the client

let socket = require('socket.io')
let io = socket(server)

io.on('connection', (socket) => { 
  console.log('Um socket conectou'+ socket.id)})


