/* TODO / FUNCTIONING

Frondend app

Ao acessar o endereço enviaremos uma tela em preto ou branco

ai mudaremosa cor do pixel ao clicar e arrastar o mouse

enviaremos isso para todos conectados

*/

let express = import('express')
//importando express

let app = express()
//chama uma instancia (como função) que será o app

let io = require('socket.io')(server)

//VARIAVEIS
const PORT = 5500
const N_IP = '192.168.1.6' // ip privado do meu pc
const S_IP = 'http://localhost'

let server = app.listen(PORT, N_IP, () => {
  let port = server.address().port
  console.log(`App listening at ${S_IP}:${port}.\n `)
})

//escutar requisições na port, no endereço _IP,
// quando pronto console.log

app.use(express.static('public'))
//para qualquer requisição manda o conteudo da pasta public

io.sockets.on('connection', (socket) => {
  console.log('Um socket conectou, ID:' + socket.id)
  socket.on('mouse', (data) => {
    socket.broadcast.emit('mouse', data)
  })
})
// havendo uma conectividade, emitir os dadosa do mouse.
