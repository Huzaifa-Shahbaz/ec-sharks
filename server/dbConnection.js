const { default: mongoose } = require('mongoose');

mongoose.set("strictQuery", true)
async function connectDb (url) {
    return mongoose.connect(url).then(()=> console.log('db connected')).catch((err)=> console.log('error connecting to db', err))
}

module.exports = { connectDb }
