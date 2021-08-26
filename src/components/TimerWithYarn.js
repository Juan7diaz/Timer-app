import { useTimer } from  "reactjs-countdown-hook";
import ButtonsIndividual from './buttons/ButtonsIndividual';
import Container from "./container/Container";
import SeeTimer from './SeeTimer/SeeTimer';


const TimerWithYarn = () => {
    
    const handleTimerFinish = () => {
        alert("times up!");
    }
    
    const {
        counter,
        seconds,
        minutes,
        pause,
        resume:start,
        reset,
    } = useTimer(300, handleTimerFinish);


    console.log( counter )

    return (
        <div>
            <SeeTimer 
                minutes={ parseInt(minutes)  }
                seconds={ parseInt(seconds) }
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
