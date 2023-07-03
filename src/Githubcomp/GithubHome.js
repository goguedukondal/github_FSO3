import React from 'react'
import Search from './Search'
import Profile from './Profile'
import Details from './Details'
import {Box,Flex} from '@chakra-ui/react'

function GithubHome() {
  return (
  
  
    <Box w='80%' ml="10%" mt="20px" p='20px' boxShadow='dark-lg' rounded='md' bg='white'>
        <Search/>

      <Flex mt='20px' p="20px" w='100%'>
      <Profile/>
       <Details/>
      </Flex>
</Box>
  
    
  )
}

export default GithubHome