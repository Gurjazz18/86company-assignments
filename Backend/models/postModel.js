const mongoose=require("mongoose")


const postScheme=new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, 
               ref: 'user', required: true 
            },
    content: { type: String, required: true, maxlength: 300 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
  });
  

  const postModel=mongoose.model("post",postScheme)

  module.exports={postModel}