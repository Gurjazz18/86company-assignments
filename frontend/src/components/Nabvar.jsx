import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react';

const Navbar = () => {

  return (
    <Flex  justifyContent={'space-evenly'} 
    bgColor={'black'} color={'white'} p={3}>
     <Link to="/">AllPost</Link>
     
    <Link to="/login">Login</Link>
    <Link to="/register">SingUp</Link>
    <Link to="/createPost">CreatePost</Link>
      
    </Flex>
  )
}

export default Navbar