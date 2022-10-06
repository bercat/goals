const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conne = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connection established: ${conne.connection.host}`.cyan.underline); 
    } catch (error) {
        console.log(error);

        process.exit(1); // want to exit the process with an error message
    }
}

module.exports = connectDB;