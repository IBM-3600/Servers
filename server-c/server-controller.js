import express from 'express';
import {Server} from 'socket.io';
import http from 'http';


const port = 3031;
const app = express();
const server = http.createServer(app);
const io = new Server(server);


//express gateway
server.listen(port,()=>{console.log('listening on port 3031...........');})

app.get('/',()=>{})

//bi directional socket gateway

io.on('connection',(socket)=>{
    console.log('connection initialized...')
})
