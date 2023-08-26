import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import { Card, CardBody,Image, CardFooter,Stack,Heading,Text,Center,Button, Divider, ButtonGroup,SimpleGrid, useToast } from '@chakra-ui/react'
import TopFivePost from './TopFivePost';

const ImageUrl='https://th.bing.com/th/id/OIP.lO7bg6dlJLZ9mWRli0tkAQHaEo?pid=ImgDet&w=474&h=296&rs=1'
const AllPost = () => {

      const[todo,setTodo]=useState([])
      const[load,setLoad]=useState(false)
      
       const toast = useToast();

 

    

       useEffect(()=>{

        fetch(`http://localhost:8080/media/analytics/posts`,{
         
          headers:{
            "Authorization":localStorage.getItem("token")
          }

        }).then((res)=>res.json()).then((res)=>{ 
         
            console.log(res.posts)
            setTodo(res.posts)
          
        
        })
  
       },[load])



       //...........................Delete...........................

       const Handledelete=(id)=>{


        fetch(`http://localhost:8080/media/post-delete/${id}`,{
            method:"DELETE",
            headers:{
               
                "Authorization":localStorage.getItem("token")
            },
           
          }).then((res)=>res.json())
          .then((res)=>{ 
           
            if (res.message === "Item is Deleted") {
                toast({
                       title: "Item is Deleted",
                     
                       status: "success",
                 
                })
                setLoad(prev=>!prev)
              }
          
          })
          

         
        
       }

       //.......................Likes......................

       const HandleLikes=(id)=>{


        fetch(`http://localhost:8080/media/posts/${id}/like`,{
            method:"POST",
            headers:{
               
                "Authorization":localStorage.getItem("token")
            },
           
          }).then((res)=>res.json())
          .then((res)=>{ 
           
            if (res.message === "likes is Increased") {
                toast({
                       title: "likes is Increased",
                     
                       status: "success",
                 
                })
                setLoad(prev=>!prev)
              }
          
          })
          

         
        
       }



       //.......................DisLikes........................

       const HandleDisLikes=(id)=>{


        fetch(`http://localhost:8080/media/posts/${id}/unlike`,{
            method:"POST",
            headers:{
               
                "Authorization":localStorage.getItem("token")
            },
           
          }).then((res)=>res.json())
          .then((res)=>{ 
           
            if(res.likes>=0){
                
            if (res.message === "Likes is Decreased") {
                toast({
                       title: "Likes is Decreased",
                     
                       status: "success",
                 
                })
                setLoad(prev=>!prev)
              }
            }else{

                toast({
                    title: "You Cannot DisLike Now",
                  
                    
                   })
                    
                   setLoad(prev=>!prev)
            }


          
          })
          

         
        
       }

       


       //......................Auth.............................
      
       if(!localStorage.getItem("token")){

        return(
            <Center>
                <Heading>Login Please</Heading>
            </Center>
        )
         }
      
  
  return (
    <>
       
      <Center>
        <Button textAlign={'center'} colorScheme='messenger' variant='link'>
            <Link to='/topfivepost'>Top 5 Post</Link>
        </Button>
      </Center>

    <SimpleGrid spacing={4} templateColumns='repeat(3,1fr)' p={5}>


    {
        todo.length>0 && todo.map((elem)=>(

            <Card maxW='sm'
                   key={elem._id}  
                    >

                <CardBody>
                        <Image
                        src={ImageUrl}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{elem.name} 
                        {"----"} Likes:{elem.likes}</Heading>
                        <Text>
                            {elem.content} 
                        </Text>
                        
                        </Stack>
               </CardBody>


                   <Divider />

                <CardFooter>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'
                              >
                                 <Link to={`/${elem._id}`}>Update</Link>
                            </Button>
                            <Button variant='solid' 
                            colorScheme='blue'
                             onClick={()=>Handledelete(elem._id)}>
                                Delete
                            </Button>
                            <Button variant='solid' colorScheme='blue'
                              onClick={()=>HandleLikes(elem._id)}>
                                Likes
                            </Button>
                            <Button variant='solid' colorScheme='blue' 
                             onClick={()=>HandleDisLikes(elem._id)}
                               >
                               Dislikes
                            </Button>
                            </ButtonGroup>
                  </CardFooter>
              </Card>


        ))


    }
      

     
  

   
    </SimpleGrid>

    
    </>
  )
}

export default AllPost