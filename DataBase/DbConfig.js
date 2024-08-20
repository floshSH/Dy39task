import * as mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const connectDb= async () => {
    //console.log('Connecting to MongoDB...');
    try {
        const connection=await mongoose.connect(process.env.dbConnectionString);
        console.log('Connected to MongoDB');
        return connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDb;