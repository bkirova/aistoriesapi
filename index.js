const cors = require("cors");
const app = require('express')();
const server = require('http').Server(app);
const port = process.env.PORT || 8080;

const latestRout = require('./api/ai/latest');
const generateRandomAIPost = require('./utils').generateRandomAIPost;
const imageData = require('./utils').imageData;

app.use(cors());

// socket setup
const io = require("socket.io")(server, {
  cors: {
     origin: "*"
  }
});

app.get('/api/ai/latest', (req, res) => latestRout(req, res))

io.sockets.on('connection', function(socket) {
  console.log(`Client with ID of ${socket.id} connected!`)

  io.sockets.emit('init', 'HelloWorld')

  socket.on('generate', () => {
    let images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg'];
        
    let index = 0;
   
    let handler = () => {
        if(images[index]) {
            let randomPost = generateRandomAIPost();
            io.sockets.emit('generate_update', {...randomPost, image:images[index]})
            index = index+1;
            setTimeout(() => handler(), 3000)
        } else {
            index = -1;
            io.sockets.emit('generate_ready', 'generate ready')
        }
    }
    setTimeout(() => handler(), 3000)
  })

  socket.on('analize', () => {

    setTimeout(() => {
      io.sockets.emit('analize_update', imageData.images[Math.floor(Math.random()*imageData.images.length)])
    }, 1000)

    setTimeout(() => {
      io.sockets.emit('analize_ready', {})
    }, 3000)
  })

  socket.on('disconnect', function() {
    console.log(`Client with ID of ${socket.id} disconnected!`)
  });
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})