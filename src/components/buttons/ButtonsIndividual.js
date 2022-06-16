import { Button } from "@chakra-ui/react"

const ButtonsIndividual = ({ ButtonsType, buttonName, action, color }) => {
    return (
        <>
            <Button
                color='theme.fontColor'
                bg={ color }
                size="lg"
                onClick={ action }
            >
            { buttonName }
            </Button>
        </>

    )
}

export default ButtonsIndividual
