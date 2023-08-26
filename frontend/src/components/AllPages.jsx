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
import AllUsers from '../Pages/AllUsers';
import SingleUser from '../Pages/SingleUser';
import TopFivePost from '../Pages/TopFivePost';
import TopFiveUser from '../Pages/TopFiveUser';




const AllPages = () => {

  return (
    <Routes>
   
       <Route path="/" element={<AllPost/>} />
       <Route path="/users" element={<AllUsers/>} />
       <Route path="/users/:user_id" element={<SingleUser/>} />
       <Route path="/createPost" element={<CreatePost/>} />
       <Route path="/:id" element={<UpdatePost/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/topfivepost" element={<TopFivePost/>} />
      <Route path="/topfiveusers" element={<TopFiveUser/>} />
  
      
     
   
    
      
    </Routes>
  )
}

export default AllPages