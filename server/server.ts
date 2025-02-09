import http from 'http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();

const PORT = 8000;
const server = http.createServer(app);

// MARK: API Route
app.get('/', (req, res) => {
    res.send("Socket.io server is healthy!")
})

// MARK: Socket.io
const io = new Server(server, {
    cors: {
        origin: "*" // For CORS
    }
});

io.on("connection", (socket) => {
    console.log("Some one connected", socket)
})

server.listen(PORT, () => {
    console.log(`Server is up and running on PORT:${PORT}`)
})