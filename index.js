import express from "express"
import cors from "cors"
import {Server} from "socket.io"
import http from "http"
import { connect } from "./config.js";
import { chatModel } from "./chat.model.js";

const app = express();

// Add cors to support multiple localhost
app.use(cors)

// 1. Create http server.
const server = http.createServer(app);

// 2. Create socket server.
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

// 3. Use socket events.
io.on("connect", (socket) => {
    console.log("Connection is established.");

    socket.on("disconnect", () => {
        console.log("Disconnected.");
    })
});

// 4. Listener.
server.listen(3000, () => {
    console.log("Server is listening on 3000.");
    connect();
})