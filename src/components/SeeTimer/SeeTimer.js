import PropTypes from 'prop-types';
import { Center, Heading, Box, Spinner } from "@chakra-ui/react";

const SeeTimer = ({ minutes, seconds }) => {

    const style = {
        'padding':'5rem', 
        'borderRadius':'20%'
    }

    return (
        <Center style={{'padding':'3rem'}}>
            <Box bg="theme.primary" style={style}>
                {
                    seconds >= 0 
                    ?
                    <Heading  size="2xl" color="theme.fontColor">{minutes}:{seconds}</Heading>
                    :
                    <Spinner color="theme.fontColor" size="xl" />            
                }
            </Box>
        </Center>
    )
}

SeeTimer.propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
}

export default SeeTimer
