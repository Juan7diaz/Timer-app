import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'

const Buttons = ({ setEvents }) => {

    const start = () =>{
        setEvents({
            start: true,
            stop: false,
            reset: false
        })
    }

    const reset = () =>{
        setEvents({
            start: false,
            stop: false,
            reset: true
        })
    }

    const stop = () =>{
        setEvents({
            start: false,
            stop: true,
            reset: false
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <Button 
                        variant="success" 
                        size="lg"
                        onClick={ start }
                    >
                        Start
                    </Button>{' '}

                    <Button 
                        variant="warning" 
                        size="lg"
                        onClick={ reset }
                    >
                        Reset
                    </Button>{' '}

                    <Button 
                        variant="danger" 
                        size="lg"
                        onClick={ stop }
                    >
                        Stop
                    </Button>
                
                </div>
            </div>
        </div>
    )
}

export default Buttons
