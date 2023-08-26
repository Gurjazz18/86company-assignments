

import React, { useEffect,useState } from 'react'
import {
    Card, CardHeader, CardBody, Heading,Stack,StackDivider,Box,Text, Center
  } from '@chakra-ui/react'


const TopFivePost = () => {
   
   
    const[data,setData]=useState([])
   
    useEffect(()=>{

        fetch(`https://eight6app-0xzc.onrender.com/media/analytics/posts/top-liked`,{
         
        headers:{
          "Authorization":localStorage.getItem("token")
        }

      })
        .then((res)=>res.json())
        .then((res)=>{ 
         
           console.log(res.topLikedPosts)
           setData(res.topLikedPosts)
        
        })
  
       },[])

       
     

  return (

    <>
       <Center>
             <Heading>Top 5 Posts</Heading>
       </Center>

       {
        data.length>0 &&data.map((elem)=>(

        <Card key={elem._id} border={'2px solid teal'} margin={"10px"}>
    <CardHeader color='blue'>
      <Heading size='md'>{elem.name}</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          content
          </Heading>
          <Text pt='2' fontSize='sm'>
           {elem.content}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase' color={'green'}>
            Likes
          </Heading>
          <Text pt='2' fontSize='sm' color={'orange.600'}>
            {elem.likes}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Created_Date
          </Heading>
          <Text pt='2' fontSize='sm'>
            {elem.created_at}
          </Text>
        </Box>
      </Stack>
    </CardBody>
         </Card>

        ))
       }


    </>
  )
}





export default TopFivePost
