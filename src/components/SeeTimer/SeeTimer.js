import PropTypes from 'prop-types';
import { Center, Heading, Box, Spinner } from "@chakra-ui/react";
import './SeeTimer.css'

const SeeTimer = ({ minutes, seconds }) => {
    return (
        <Center className='Center'>
            <Box bg="theme.primary" className='Box'>
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
