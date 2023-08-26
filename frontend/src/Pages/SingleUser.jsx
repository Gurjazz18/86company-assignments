import React, { useEffect,useState } from 'react'
import {
    Card, CardHeader, CardBody, Heading,Stack,StackDivider,Box,Text
  } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

const SingleUser = () => {
    const{user_id}=useParams()
   
    const[data,setData]=useState([])
    const[load,setLoad]=useState(false)
    useEffect(()=>{

        fetch(`https://eight6app-0xzc.onrender.com/user/get-by-id/${user_id}`)
        .then((res)=>res.json())
        .then((res)=>{ 
         
            setData([res.users])
        
        })
  
       },[load])

       
       console.log(data)

  return (

    <>

       {
        data.length>0 &&data.map((elem)=>(

        <Card key={elem._id} border={'2px solid teal'} padding={10}
         margin={10}>

        <CardHeader color={'blue'}>
        <Heading size='md'>{elem.name}</Heading>
        </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Bio
          </Heading>
          <Text pt='2' fontSize='sm'>
           {elem.bio}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Email
          </Heading>
          <Text pt='2' fontSize='sm'>
            {elem.email}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            UserId
          </Heading>
          <Text pt='2' fontSize='sm'>
           {elem._id}
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

export default SingleUser

