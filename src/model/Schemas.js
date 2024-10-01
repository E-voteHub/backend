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

export default {User,Vote}