const mongoose = require('mongoose')

const url = process.env.MONGO_URL

const connectDatabase = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log('Database Connected !')
    })
    .catch((err)=>{
        console.log('Getting while connect database', {error: err.message})
    })
}

module.exports = connectDatabase