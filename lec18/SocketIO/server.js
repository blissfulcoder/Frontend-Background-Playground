const socketio = require('socket.io')
const http = require('http')

const app = express()

const server = http.Server(app)

const io = socketio(server)

io.on('connection',function (socket) {

});

app.use('/',express.static(__dirname+ '/public_static'))

server.listen(2323, () => {
    console.log("Server started at htttp:///localhost:2323")

})