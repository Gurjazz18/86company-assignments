import React, { useState } from 'react'


 import {
     Heading,
     Textarea,
     FormLabel,Button,
     useToast, Center
} from "@chakra-ui/react"


import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
    const navigate=useNavigate()
    
    const toast = useToast();


    const [postData, setPostData] = useState({
        content:"",
        name:"",
        userId:""
       
    });
   
   
 


  const handleSubmit=(e)=>{
      e.preventDefault()


      fetch(`http://localhost:8080/media/create-post`,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
             "Authorization":localStorage.getItem("token")
        },
        body:(JSON.stringify(postData))
      }).then((res)=>res.json())
      .then((res)=>{ 
       
         
        if (res.message === "post is created") {
          toast({
                 title: "post is created",
               
                 status: "success",
           
          })
          navigate("/")
        }else{

          toast({
            title: "post is Large",
          
           
      
     })
        }
       
      
      
      })
}



  const handleChange=(e)=>{
    const {value,name}=e.target
    
    setPostData({...postData,[name]:value})
  }
  

 


  return (
    <Center p={10}>
     
      
        <form onSubmit={handleSubmit} style={{width:"40%"}}>
        <Heading>Create New Post</Heading>
        
        <FormLabel>
         Content:
          <Textarea 
            name="content"
            value={postData.content}
            onChange={handleChange}
           
           
         
            bg='blue.100'
          />
        </FormLabel>

       
       
       
        
       
        <Button type="submit"
           colorScheme='blue'
           width={"97%"}
          padding={'0px 130px'}>CreatePost</Button>
      

       </form>
      
    </Center>
  )
  }

export default CreatePost