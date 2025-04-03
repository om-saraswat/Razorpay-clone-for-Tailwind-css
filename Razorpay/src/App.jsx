import { useState } from 'react'
import Navi from './components/navigation/Navi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi/>
    </>
  )
}

export default App
