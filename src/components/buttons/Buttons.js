import { Button, Stack, Center } from "@chakra-ui/react"

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
        <Center>
            <Stack spacing={4} direction="row">
                <Button
                    color="theme.fontColor"
                    bg="theme.start"
                    size="lg"
                    onClick={ start }
                >
                Start
                </Button>

                <Button
                    color="theme.fontColor"
                    bg="theme.pause"
                    size="lg"
                    onClick={ stop }
                >
                Pause
                </Button>

                <Button
                    color="theme.fontColor"
                    bg="theme.reset"
                    size="lg"
                    onClick={ reset }
                >
                Reset
                </Button>
            </Stack>
        </Center>
    )
}

export default Buttons
