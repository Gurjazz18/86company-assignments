
   const mongoose=require("mongoose")


    const UserSchema=new mongoose.Schema({
    name: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio:   { type: String, maxlength: 200 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
    
  
  })

  const UserModel=mongoose.model("user",UserSchema)

   module.exports={UserModel}


   