
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('BD online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inciar la BD ver logs');
    }
    
}

module.exports = {
    dbConnection
}