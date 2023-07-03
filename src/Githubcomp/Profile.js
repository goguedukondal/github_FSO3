import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useData } from "./Contex";
function Profile() {
  const {user} = useData()
  console.log(user)
  return (
    <Box w='30%' textAlign='center'>
      <Image
        src={user.avatar_url
        }
        alt="Dan Abramov"
        boxSize="150px"
        ml='50px'
      />

      <Text mt='5px' fontSize='3xl'>{user.login}</Text>
      <Text mt='5px'>
        {user.bio}
       
        </Text>
        <Button  mt='10px' colorScheme='teal' size='md'>Profile</Button>
    </Box>
  );
}

export default Profile;
