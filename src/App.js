//import TimerWithCustomHooks from './components/TimerWithCustomHooks' //TimerWithCustomHooks da problemas unicamente con el boton de reset
import Header from './components/header/Header'
import TimerWithYarn from './components/TimerWithYarn'

const App = () => {
  return (
    <>
      <Header title='TIMER APP 🤨'/>
      {/* <TimerWithCustomHooks /> */}
      <TimerWithYarn />
    </>
  )
}

export default App
