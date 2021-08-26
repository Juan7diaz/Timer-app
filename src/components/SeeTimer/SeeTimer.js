import "./SeeTimer.css"
import PropTypes from 'prop-types';

const SeeTimer = ({ minutes, seconds}) => {

    console.log("hola see timer")

    return (
        <div className="banda">
            <div className="container">
                <div className="reloj">
                    <p id="minutos" className="minutos">{ minutes }</p>
                    <p>:</p>
                    <p id="segundos" className="segundos">{ seconds }</p>
                </div>
            </div>
      </div>
    )
}

SeeTimer.propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired
}

export default SeeTimer
