import PropTypes from 'prop-types';
import { Select, Box, Center } from '@chakra-ui/react'

const  BreakTab = ({ BreakType, setInitialMinute }) => {

    const handleSelectChange = (e) =>{
        setInitialMinute( parseInt( e.target.value ) )
    }

    return (
        <Center style={{"paddingTop":"3rem"}}>
            <Box>
                <Select variant="outline" onChange={ handleSelectChange }>
                    {
                        BreakType.map( (item, index) =>
                            <option
                                key={ index }
                                value={ item.seg }
                            >
                                { item.name }
                            </option>
                        )
                    }
                </Select>
            </Box>
        </Center>
    )
  }

BreakTab.propTypes = {
    BreakType: PropTypes.array.isRequired,
    setInitialMinute: PropTypes.func.isRequired,
}

export default BreakTab
