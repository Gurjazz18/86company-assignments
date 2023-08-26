import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { Flex } from '@chakra-ui/react';

const Navbar = () => {
  
 
  const handleLogout=()=>{
        

       localStorage.clear()
       
       
  }

  return (
    <Flex  justifyContent={'space-evenly'} 
    bgColor={'black'} color={'white'} p={3}>
     <Link to="/">AllPost</Link>
     <Link to="/users">AllUsers</Link>
     <Link to="/createPost">CreatePost</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">SingUp</Link>
    <Link to="/login" onClick={handleLogout}>Logout</Link>

      
    </Flex>
  )
}

export default Navbar