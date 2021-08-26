import { useTimer } from  "reactjs-countdown-hook";
import ButtonsIndividual from './buttons/ButtonsIndividual';
import Container from "./container/Container";
import SeeTimer from './SeeTimer/SeeTimer';

const TimerWithYarn = () => {

    const initialMinute = 10;

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
        <div>
            <SeeTimer 
                minutes={ parseInt( minutes ) }
                seconds={ parseInt( seconds ) }
                progress={ parseInt( counter/initialMinute * 100 ) }
            />
            <Container>
                <ButtonsIndividual 
                    color={ 'success' } 
                    action={ start }
                    buttonName={ 'Start' }
                />
                <ButtonsIndividual 
                    color={ 'warning' } 
                    action={ pause }
                    buttonName={ 'Pause' }
                />
                <ButtonsIndividual 
                    color={ 'danger' } 
                    action={ reset }
                    buttonName={ 'Reset' }
                />
            </Container>
        </div>
    )
}

export default TimerWithYarn
