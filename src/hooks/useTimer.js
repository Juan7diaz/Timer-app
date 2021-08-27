import { useState } from 'react'

export const useTimer = ( initialState, events ) => {

    //este customHook recibe:
    //initialState : minuto donde inicia a contar
    //events: las acciones que hace el time (inicar, restablecer, detener)

    const { start, reset } = events

    const [minutes, setMinutes] = useState( initialState )
    const [seconds, setSeconds] = useState( 0 )
    const [flag, setFlag] = useState( true ) //flag indica cuando el timer esta activo

    const decrementMin = () =>{
        minutes>0 && setMinutes( minutes - 1 )
    }

    const decrementSec = () =>{
        seconds>0 ? setSeconds( seconds - 1 ) : stopTimeout()
    }

    const stopTimeout = () =>{
        clearTimeout()
        minutes===0 && setFlag( false )
    }

    const resetSec = () =>{
        setSeconds( 60 )
    }

    if( start ){
        setTimeout( () => {
            console.log("llamada") //y esto se llama 2 veces
            decrementSec()
            if( seconds === 0 ){
                minutes!==0 && resetSec()
                decrementMin()
            }
        }, 1000)
    }

    //si reset es true da error
    if( reset ){
        clearTimeout()
        setMinutes( initialState )
        setSeconds( 0 )
    }

    //devuele--
    //minutes: los minutos faltante
    //seconds: los segundos faltantes
    //flag: bool que indica cuando el contador llega a 0 -> ( false )
    
    return { minutes, seconds, flag }
}