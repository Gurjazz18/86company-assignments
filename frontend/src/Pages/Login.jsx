import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
  
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react'
  import axios from 'axios';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  
  
  export default function Login() {
  
      const toast = useToast();
      const navigate=useNavigate()
  
      const[state,setState]=useState({
       
        email:"",
        password:""
      })
    
      const handleSubmit=async(e)=>{
        e.preventDefault()
      
         
        
        await axios("https://eight6app-0xzc.onrender.com/user/login", {
          method: "POST",
          data: state,
          headers: {
            "content-type": "application/json",
          },
        }).then((res) => {
          
          if (res.data.message === 'Login successful') {
            toast({
                   title: "Login Successfull",
                   description: "You've Logged In your account.",
                   status: "success",
             
            });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.name);
           
          } else {
            toast({
              title: "Acount has been Already Regestered.",
              description: "Please Login to account or Create with new Email",
              status: "error",
              
            });
          }
           
         
    
    
    
    
    
         
    
        }).catch((err)=>{
          console.log(err)
        })
    
    
    
      setState({
      
        email:"",
        password:""
      })
  
  
  
      navigate("/")
    
    
    }
    
      const handleChanege=(e)=>{
    
        const {value,name}=e.target
    
        setState({...state,[name]:value})
    
      }
    
  
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
            </Text>
          </Stack>
  
            <form onSubmit={handleSubmit} id='form-clear'>
             <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"
                autoComplete="off"
                
                 required 
                 value={state.email}
                 onChange={handleChanege}
                 name="email"
                
                
                 />
              </FormControl>
  
  
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
  
  
  a            utoComplete="off"
                
                required 
                value={state.password}
                onChange={handleChanege}
                name="password"
                />
              </FormControl>
  
  
              <Stack spacing={10}>
                
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type='submit'
                  
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
            </Box>
  
            </form>
  
  
  
        </Stack>
      </Flex>
    )
  }