import "./SeeTimer.css"
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar'

const SeeTimer = ({ minutes, seconds, progress }) => {

    console.log("hola see timer")

    return (
        <div className="banda">
            <div className="container">
                <div className="reloj">
                    <p id="minutos" className="minutos">{ minutes }</p>
                    <p>:</p>
                    <p id="segundos" className="segundos">{ seconds }</p>
                </div>
                    <ProgressBar 
                        variant="info"
                        style={{'borderRadius': '0px'}}
                        now={ progress } 
                    />
            </div>
      </div>
    )
}

SeeTimer.propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired
}

export default SeeTimer
