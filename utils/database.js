import mongoose from 'mongoose'

let isConnected = false; // track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("Mongo DB is already connected");
        return;
    }
    // If not connected
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "Promptify",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;

        console.log('MongoDb Connected')
    } catch (error) {
        console.log(error)
    }
}
