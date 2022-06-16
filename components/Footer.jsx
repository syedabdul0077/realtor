import {Box,Flex,Text} from '@chakra-ui/react';
import { SiArtixlinux } from "react-icons/si";


const Footer=()=>(
    <Box textAlign="center" p="5" color="gray.600 " borderTop="1px" borderColoe="gray.100">
        <Flex alignItems = "center" justifyContent="center" p="3">
        <SiArtixlinux />
        <Text>2022 Really Estate, Inc.</Text>
        </Flex>
    </Box>

)

export default Footer;