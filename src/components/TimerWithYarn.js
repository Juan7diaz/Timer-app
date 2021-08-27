import { useState } from 'react'
import { Stack, Center } from '@chakra-ui/react'
import { useTimer } from  "reactjs-countdown-hook"
import { BreakType } from '../data/BreakType'
import ButtonsIndividual from './buttons/ButtonsIndividual'
import BreakTab from "./breakTab/BreakTab"
import SeeTimer from './SeeTimer/SeeTimer'

const TimerWithYarn = () => {

    const [initialMinute, setInitialMinute] = useState( 1500 )

    //https://www.npmjs.com/package/reactjs-countdown-hook
    const {
        counter,
        isActive,
        seconds,
        minutes,
        pause,
        resume:start,
        reset,
    } = useTimer( initialMinute );

    return (
        <>
            <BreakTab 
                BreakType={ BreakType }
                setInitialMinute={ setInitialMinute }
                reset={ reset }
            /> 

            <SeeTimer 
                minutes={ parseInt( minutes ) }
                seconds={ parseInt( seconds ) }
            />

            <Center>
                <Stack spacing={4} direction="row" align="center">
                    <ButtonsIndividual 
                        color={ 'theme.start' } 
                        action={ start }
                        buttonName={ 'Start' }
                    />
                    <ButtonsIndividual 
                        color={ 'theme.pause' } 
                        action={ pause }
                        buttonName={ 'Pause' }
                    />
                    <ButtonsIndividual 
                        color={ 'theme.reset' } 
                        action={ reset }
                        buttonName={ 'Reset' }
                    />
                </Stack>
            </Center>
        </>
    )
}

export default TimerWithYarn
