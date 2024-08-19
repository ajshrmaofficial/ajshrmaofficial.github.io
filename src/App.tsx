import Desktop from "./components/Desktop"
import BottomBar from "./components/bottomBar"
import { WindowManagerProvider } from "./utility/context/windowManagerContext"

function App() {
  return (
    <WindowManagerProvider>
    <div className='bg-offWhite h-full w-full'>
      <Desktop/>
      <BottomBar/>
    </div>
    </WindowManagerProvider>
  )
}

export default App
