import mongoose from "mongoose"

//Sign up and Login Schema
const UserSchema = new mongoose.Schema({
    Email:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    },
    userId:{ type: Number,
         unique: true
         }
    
})

//Regitration schema 
const RegitrationForVoteSchema = new mongoose.Schema({
    userId:{ type: Number,
         unique: true
         },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
       type:String,
        required:true 
    },
    Age:{
        type:Number,
        required:true
    },
    DOB:{ type: Date, required: true },

   MobileNumber: { type: String, 
    required: true, 
    unique: true, 
    validate: { validator: function(v) { return /^\d{10}$/.test(v); }, message: props => `${props.value} is not a valid 10-digit mobile number!` } 
},
   
    AadharNo : {
        type: Number,
        unique: true,
        required: true,


    },

    VoterId:{
        type: Number,
        unique:true,
        required:true
    }



})




const VotingSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',UserSchema);
const Vote = mongoose.model('Vote',VotingSchema);
const ResVote = mongoose.model('ResVote',RegitrationForVoteSchema) // resVote = RegitrationForVoteSchema //at time for voting nesessary 
export default {User,Vote,ResVote}