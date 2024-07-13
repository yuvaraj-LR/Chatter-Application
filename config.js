import mongoose from "mongoose"

export const connect = async() => {
    const mongoDB_URI = (process.env.BUILDENV === "dev") ? process.env.MONGODB_URL_DEV : process.env.MONGODB_URL_LIVE;

    console.log(mongoDB_URI, "urriii...");

    await mongoose.connect(mongoDB_URI);
    console.log("DB connected successfully.");
}