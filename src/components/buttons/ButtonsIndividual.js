import Button from 'react-bootstrap/Button'

const ButtonsIndividual = ({ buttonName, action, color }) => {
    return (
        <>
            <Button 
                variant={ color } 
                size="lg"
                onClick={ action }
            >
            { buttonName }
            </Button>{' '}
        </>

    )
}

export default ButtonsIndividual
