import "./SeeTimer.css"

const SeeTimer = ({ minutes, seconds}) => {
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

export default SeeTimer
