import React, { useEffect,useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    
    Tr,
    Th,
    Td,
    TableCaption,
    Center,
    TableContainer,
    Button
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const AllUsers = () => {
    const[data,setData]=useState([])
    const[load,setLoad]=useState(false)
    useEffect(()=>{

        fetch(`https://eight6app-0xzc.onrender.com/user/analytics/users`)
        .then((res)=>res.json())
        .then((res)=>{ 
         
            console.log(res.users)
            setData(res.users)
        
        })
  
       },[load])

  return (

    <> 
          
      <Center>
        <Button textAlign={'center'} colorScheme='messenger' >
              <Link to='/topfiveusers'>To Show Top 5 Users Click on It</Link> 
        </Button>
      </Center>

    <TableContainer>
            <Table variant='striped' colorScheme='teal'>
            
                <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Email</Th>
                    <Th>Name</Th>
                
                </Tr>
                </Thead>

                {
                    data.length>0 && data.map((elem)=>(
                    <Tbody key={elem._id}>
                        <Tr>
                            <Td>{elem._id}</Td>
                            <Td>{elem.email}</Td>
                            <Td>{elem.name}</Td>
                            <Td>
                        
                            <Link to={`/users/${elem._id}`}>
                                GetUserByID 
                            </Link>
                            </Td>
                        </Tr>
                
                    </Tbody>

                    ))

                
                }
                
            </Table>
    </TableContainer>


    </>


  )
}

export default AllUsers
