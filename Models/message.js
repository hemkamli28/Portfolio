import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required!"]
    },
    message: {
        type: String,
        required: [true, "message is required!"]
    },
   
})

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;