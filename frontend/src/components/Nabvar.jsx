import React, { useContext } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { Flex } from '@chakra-ui/react';
import { AppContext } from '../Pages/ContextApi';

const Navbar = () => {
  const{logoutUser}=useContext(AppContext)
  
 
  const handleLogout=()=>{
        
      logoutUser()
     
       
       
  }

  return (
    <Flex  justifyContent={'space-evenly'} 
    bgColor={'black'} 
    color={'white'}
    fontWeight={'medium'} 
    p={3}  textTransform='uppercase'>
     <Link to="/">Home</Link>
     <Link to="/users">AllUsers</Link>
     <Link to="/createPost">CreatePost</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">SingUp</Link>
    <Link to="/login" onClick={handleLogout}>Logout</Link>

      
    </Flex>
  )
}

export default Navbar