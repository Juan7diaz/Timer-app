import { useTimer } from  "reactjs-countdown-hook"
import ButtonsIndividual from './buttons/ButtonsIndividual'
import SeeTimer from './SeeTimer/SeeTimer'
import { Stack, Center } from '@chakra-ui/react'

const TimerWithYarn = () => {

    const initialMinute = 300;

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
