import React from 'react'
import {Box,Input,Button,Heading} from '@chakra-ui/react'
import { useState } from 'react'
import axios from "axios";
import { useData } from './Contex';
function Search() {
  const {setUser}  = useData()
  const [username,setUserName] = useState('')
  const getUserData = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        //  console.log(res);
        setUser(res.data)
      })
      .catch(() => {
        alert("Failed to fetch User Details");
      });
    }
  return (
   <Box w="100%">
    <Heading color='black'  textAlign='start' size='lg' mb='10px'>Gith Hub Account</Heading>
   <Input placeholder='Enter github Useerid' width='700px' mr='10px' onChange={(e)=>{setUserName(e.target.value)}} />
   <Button width='200px' colorScheme='blue' variant='solid' onClick={getUserData}>
    Search
  </Button>
   </Box>
  )
  
}

export default Search