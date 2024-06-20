import Desktop from "./components/Desktop"
import BottomBar from "./components/bottomBar"
import { WindowManagerProvider } from "./utility/context/windowManagerContext"

function App() {

  return (
    <WindowManagerProvider>
    <div className='bg-offWhite'>
      <Desktop/>
      <BottomBar/>
    </div>
    </WindowManagerProvider>
  )
}

export default App
