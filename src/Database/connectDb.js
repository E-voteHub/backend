import mongoose from "mongoose";

const ConnectDB =async ()=>{
    try{
    await mongoose.connect('mongodb://localhost:27017/VoteDB')
    console.log('MongoDB connected');
    
}catch(err){
    console.error(err.message)
}

};

export default ConnectDB;