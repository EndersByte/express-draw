let express = require('express')
let app = express()
// importa express e transforma app em função

let server = app.listen( 5500,'192.168.1.6', () => {
    let port = server.address().port;
    console.log(`Example app listening at http://localhost:${port}`);
  })
  //declara o server usando o app

  app.use(express.static('public'));
//sending the data to the client

let io = require('socket.io')(server)

io.sockets.on('connection', (socket) => { 
  console.log('Um socket conectou, ID:'+ socket.id)

  socket.on('mouse', (data)=>{
    socket.broadcast.emit('mouse',data)
    

  })
})

