import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks'; 

console.log("Attempting to connect to MongoDB");
console.log("Current directory:", process.cwd());
console.log("MongoDB URI value:", process.env.MONGODB_URI);
console.log("Connection exists:", !!process.env.MONGODB_URI);
console.log("Connection URI:", uri);

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
        console.log("Connected to: ", process.env.MONOGB_URI ? "MongoDB Atlas" : "Local MongoDB");
    })
    .catch((error) => { 
        console.log('Error connecting to MongoDB:', error);
    })
export default mongoose.connection;
