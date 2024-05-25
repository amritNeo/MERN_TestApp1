const mongoose = require('mongoose')
require('dotenv').config()


async function connectDB() {
    console.log('db connection trying...')
    try {
        console.log(process.env.MONGODB_URI);
        mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to DB')
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectDB

