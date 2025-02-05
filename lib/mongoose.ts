import mongoose from 'mongoose'; // Changed to single quotes for consistency

let isConnected : boolean = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConnected) return console.log('Already connected to MongoDB');

    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        isConnected = true
    } catch (error) {
        console.log(error);
    }
}