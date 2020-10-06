let express = require('express')
let app = express()
// importa express e transforma app em função



let server = app.listen( 5500, () => {
    let port = server.address().port;
    console.log(`Example app listening at http://localhost:${port}`);
  })
  //declara o server usando o app

  app.use(express.static('public'));

  
/*
app.use('/', (req, res) => {
    res.sendFile(__dirname +'\\index.html')
    
    console.log(__dirname + '\\index.html')
    console.log('houve um get')

})*///sending the data to the client

 
let io = require('socket.io')(server)

io.on('connection', (socket) => { 

    console.log('new connecton has been made'+ io.id)})


