import React from 'react'
import { Box, Text } from "@chakra-ui/react"

const Header = ({ title }) => {
    return (
        <Box bg="tomato" w="100%" p={4}  bg="theme.primary">
            <Text fontSize="lg" fontWeight="bold" color="white">
                { title }
            </Text>
        </Box>
    )
}

export default Header
