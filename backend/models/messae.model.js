import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps:true}) //if i use this i can get autometicley (createdAt , updatedAT)


const Messages = mongoose.model("Message",messageSchema);

export default Messages;