

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to MongoDB');
    }
    catch (error){
        throw new Error(error);
    }
}

export default connectDB;