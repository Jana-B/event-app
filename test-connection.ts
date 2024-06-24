import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
console.log("MONGODB_URI:", MONGODB_URI); // Debug log to verify URI

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing!");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) {
        console.log("Using cached database connection");
        return cached.conn;
    }

    if (!cached.promise) {
        console.log("Connecting to database...");
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'eventsy',
            bufferCommands: false
        });
    }

    cached.conn = await cached.promise;
    console.log("Connected to database");
    return cached.conn;
};
