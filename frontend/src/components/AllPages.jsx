import React from 'react'
import {
   
    Routes,
    Route,
  } from "react-router-dom";
import Login from '../Pages/Login';
import Register from '../Pages/Registration';
import CreatePost from '../Pages/CreatePost';
import AllPost from '../Pages/AllPost';
import UpdatePost from '../Pages/UpdatePost';




const AllPages = () => {

  return (
    <Routes>
   
       <Route path="/" element={<AllPost/>} />
       <Route path="/:id" element={<UpdatePost/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/createPost" element={<CreatePost/>} />
     
   
    
      
    </Routes>
  )
}

export default AllPages