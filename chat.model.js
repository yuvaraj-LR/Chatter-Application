import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    username: String,
    message: String,
    gender: Number,
    timestramp: String
})

export const chatModel = mongoose.model("chat", chatSchema);