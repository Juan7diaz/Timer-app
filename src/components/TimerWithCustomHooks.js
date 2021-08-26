import { useState } from 'react'
import { useTimer } from '../hooks/useTimer'
import Buttons from './buttons/Buttons'
import SeeTimer from './SeeTimer/SeeTimer'

const TimerWithCustomHooks = () => {
    const [events, setEvents] = useState({
        start: false,
        resert: false,
        stop: false
    })
    const { minutes, seconds } = useTimer( 5, events )

    return (
        <div>
            <SeeTimer 
                minutes={ minutes } 
                seconds={ seconds }
            />
            
            <Buttons setEvents={ setEvents } />
        </div>
    )
}

export default TimerWithCustomHooks
