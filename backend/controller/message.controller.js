import Conversation from "../models/conversation.model.js";
import Messages from "../models/messae.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;


    if (senderId.toString() === receiverId) {
      return res.status(400).json({
        message: "Cannot send message to yourself",
      });
    }
    
    // find conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // if not any conversation before then create a conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Messages({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    };

    await Promise.all([conversation.save(),newMessage.save()]);

    const recevierSocket = getReceiverSocketId(receiverId);
    if(recevierSocket) {
      io.to(recevierSocket).emit("newMessage",newMessage)
    }


    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getMessages = async (req,res) => {
  try{
    const {id:userToChatId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({participants:{$all:[senderId, userToChatId]},
    }).populate("messages");

    if(!conversation) return res.status(200).json([]);
    const messages = conversation.messages;

    res.status(200).json(messages);

  }catch(error){
    console.log("Error in getMessages controller :", error.message);
    res.status(500).json({error:"Internal server error"})
  }
}
