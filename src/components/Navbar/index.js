import React from "react";
import Logo from "../../assets/images/artifishable_logo.png"
import { Flex, Box, Link, Text, Button } from 'rebass';

function Navbar() {
    const [categories] = useState([
        {
            name: 'commercial',
            description: 'Photos of fish'
        }
    ])

    return(
        <Flex id="NavBar"
            px={2}
            color='white'
            bg='#626C66'
            alignItems='center'
        ><img id="fish_logo" src={Logo}></img>
        <Text
            p={2}
            fontWeight='bold'
            color='primary'
        >
        </Text>
        <Box 
            mx='auto'
        />
        <Link className="navLink"
            variant='nav'
            href='#'
            color="#E1CA96"
            px='3'
            py='2'
        >About 
        </Link>
        <Link className="navLink"
            variant='nav'
            href='#'
            color="#E1CA96"
            px='3'
            py='2'
        >Contact 
        </Link>
        <Link className="navLink"
            variant='nav'
            href='#'
            color="#E1CA96"
            px='3'
            py='2'
        >Shop 
        </Link>
        <Link className="navLink"
            variant='nav'
            href='#'
            color="#E1CA96"
            px='3'
            py='2'
        >Sign in
        </Link>
        <Button id='signupbtn'
            variant='outline'
            mr={2}
        >Sign Up
        </Button>
        </Flex>
    );
}

export default Navbar;