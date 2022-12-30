const mongoose = require('mongoose');
const users_collection1 = require('./userdata');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/myuserdata')
.then(()=>{console.log('Connection Successful')})
.catch((err)=>{console.log(err)});