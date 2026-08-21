import Mongoose from "mongoose";
import { ENV } from "./env.js";


export const connectDB = async () => {
    try {
        const { MONGO_URL } = ENV;
        if (!MONGO_URL) throw new Error("MONGO_URL is not set");
        const Conn = await Mongoose.connect(ENV.MONGO_URL);
        console.log("DB conected", Conn.connection.host);
    } catch (error) {
        console.error("DB failed", error);
        process.exit(1); //1 status code mean fail while 0 mean success
    }
}

