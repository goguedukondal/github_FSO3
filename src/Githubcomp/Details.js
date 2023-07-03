import React from 'react'
import {Box,Text} from '@chakra-ui/react'
import { Card, CardHeader, CardBody,Heading,Stack,StackDivider } from '@chakra-ui/react'
import { useData } from "./Contex";
function Details() {
  const {user} = useData()
  return (
    
    <Box  ml='20px' w='70%' color='white' p="20px" textAlign="left">
    
    <Card>
  <CardHeader>
    <Heading size='md'>Details Of The User</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Public Repositiries
        </Heading>
        <Text pt='2' fontSize='sm'>
         {user.public_repos}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Followers
        </Heading>
        <Text pt='2' fontSize='sm'>
          {user.followers}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Following
        </Heading>
        <Text pt='2' fontSize='sm'>
          {user.following}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>

    </Box>
  )
}

export default Details