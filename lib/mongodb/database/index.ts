import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGOBD_URI

let cached =(global as any).mongoose || { conn: null, promise: null} 
// if we do not have a mongoose cached connection, we set it to an empty obj

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error("MONGODB_URI is missing!");

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'eventsy',
        bufferCommands: false
    })

    cached.conn = await cached.promise

    return cached.conn;
}

// Server actions
// connectToDatabase()
// If we didnt't cache connections, it would initiate a connection again and again and again