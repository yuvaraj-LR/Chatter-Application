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

    socket.on("join", (userDetails) => {
        socket.username = userDetails.username;
        socket.gender = Number(userDetails.gender);

        // Load previous messages from DB.
        chatModel.find().sort().limit(50)
            .then(messages => {
                socket.emit("load_message", messages)
            }) 
            .catch(e => {
                console.log("Error", e);
            })
    });

    // Send a message and store it in DB.
    socket.on("new_message", (message) => {
        let d = new Date();
        let timestramp = d.toLocaleTimeString();

        const newChat = new chatModel({
            username: socket.username,
            gender: socket.gender,
            message,
            timestramp
        });

        newChat.save();

        let finalData = {
            username: socket.username,
            gender: socket.gender,
            message,
            timestramp
        };

        console.log("Before broadcast data", finalData);
        // Broadcast the message.
        socket.broadcast.emit("broadcast_message", finalData);
    })

    socket.on("disconnect", () => {
        console.log("Disconnected.");
    })
});

// 4. Listener.
server.listen(3000, () => {
    console.log("Server is listening on 3000.");
    connect();
})