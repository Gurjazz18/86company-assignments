const express=require("express")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { postModel } = require("../models/postModel");
 
const PostRouter=express.Router()

//post router................................

PostRouter.post('/create-post', async (req, res) => {
     const{userId,name,content}=req.body
      
    try {
      const post= new postModel({userId,name,content})
         
           await post.save()
            res.status(201).json({
            message:"post is created",
            status:true,
            post
               
        });
    } catch (err) {
      res.status(500)
      .json({
             err: 'Error creating post',
             message:err.message
            });
      
    }
  })



  //..................AllPost.......................................

  PostRouter.get('/get-posts/', async (req, res) => {
  
    try {
      const posts = await postModel.find();
      if (!posts) {
         res.status(401).json({
            message:"Posts is Not Found",
            status:false
         })
      }else{

        res.status(201).json({
            message:"posts are founded",
            status:true,
            posts
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



  //.................. Update......................
    PostRouter.put("/post-update/:id", async (req,res)=>{

    const payload=req.body
    
    const id=req.params.id

     const note=await postModel.findOne({_id:id})
     console.log(note)

     const userID_in_note=note.userId.valueOf()
     const userID_in_making_req=req.body.userId

     

    try {
        if(userID_in_note!==userID_in_making_req){
            res.send({
                message:"You are not Authorised person",
                status:false
            })
        
        }else{
            await postModel.findByIdAndUpdate({_id:id},payload)
            res.send({
                message:"Item is Updated",
                status:true
            })

        }
       
        
    } catch (error) {
        res.send({message:"someThing went wrong"})
        
        
    }
   
   
    })

   //delete by ID....................... 

   PostRouter.delete("/post-delete/:id", async (req,res)=>{
     
    const id=req.params.id
    const note=await postModel.findOne({_id:id})
    const userID_in_note=note.userId.valueOf()
    const userID_in_making_req=req.body.userId

   try {
       if(userID_in_note!==userID_in_making_req){
           res.send({
               message:"You are not Authorised person",
               status:false
           })
       
       }else{
           await postModel.findByIdAndDelete({_id:id})
           res.send({
               message:"Item is Deleted",
               status:true
           })

       }
      
       
   } catch (error) {
       res.send({
           message:"someThing went wrong"
       })
       
       
   }
  
  
   })






  module.exports={PostRouter}
