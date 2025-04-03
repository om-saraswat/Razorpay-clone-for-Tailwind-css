import { useState } from 'react'
import Navi from './components/navigation/Navi'


import Section from './components/Section/Section'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi/>
      <Section/>
    </>
  )
}

export default App
