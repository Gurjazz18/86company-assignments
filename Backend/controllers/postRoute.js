const express=require("express")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { postModel } = require("../models/postModel");
 
const PostRouter=express.Router()

//post router................................

PostRouter.post('/create-post', async (req, res) => {
    try {
      const post= new postModel(req.body)
         
           await post.save()
            res.status(201).json({
            message:"post is created",
            status:true,
            post
               
        });
    } catch (err) {
      res.status(500)
      .json({
             err: 'Error creating task',
             message:err.message
            });
      
    }
  })


  
  //...................post get by ID...............................



  PostRouter.get('/get-posts/:id', async (req, res) => {
    const {id}=req.params
    try {
      const post = await postModel.find({userId:id});
      if (!post) {
         res.status(401).json({
            message:"Post is Not Found",
            status:false
         })
      }else{

        res.status(201).json({
            message:"posts are founded",
            status:true,
            post
      })

    }
      
    } catch (error) {
      res.status(404)
      .json({ 
        error: error.message,
        message:"Something went wrong"
    
    });
    }
  });


  module.exports={PostRouter}
