     const mongoose = require('mongoose');

     const user_schema1 = new  mongoose.Schema({
        name:{
            type: String,
            required:true,
            lowercase:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phoneNo:{
            type:Number,
            required:true,
            unique:true
        },
        adharNo:{
            type:Number,
            required:true,
            unique:true,
            length:12
        },
        panNo:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            minLength: 8, 
            minLowercase: 1, 
            minUppercase: 1, 
            minNumbers: 1, 
            minSymbols: 1
        }
     });

     const users_collection1 = new mongoose.model('users_collection1',user_schema1);
     module.exports=users_collection1;