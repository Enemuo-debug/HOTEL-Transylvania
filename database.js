const mongoose = require("mongoose")
const {MESSAGES} = require('./constants')
const URI = require('./constants')
function DataBase(){
    mongoose.set('strictQuery', true)
    mongoose.connect(URI.DATABASE_URI, { useNewUrlParser: true,
    useUnifiedTopology: true })
        .then(()=>{
            console.log(MESSAGES.SUCCESS_MESSAGE);
        })
        .catch((err)=>{console.log(MESSAGES.ERROR_MESSAGE, '\n', err)})

}

module.exports = DataBase