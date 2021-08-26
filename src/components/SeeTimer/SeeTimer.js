import PropTypes from 'prop-types';
import { Center, Spacer, Heading, Box,SimpleGrid,Flex } from "@chakra-ui/react";

const SeeTimer = ({ minutes, seconds }) => {

    const style = {
        'padding':'5rem', 'borderRadius':'10%'
    }

    return (
        <Center style={{'padding':'3rem'}}>
            <Box bg="theme.primary" style={style}>
                <Heading  size="2xl" color="theme.fontColor">{minutes}:{seconds}</Heading>
            </Box>
        </Center>
    )
}

SeeTimer.propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
}

export default SeeTimer
