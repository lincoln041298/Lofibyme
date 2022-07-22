import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Intheday } from './components/background/Intheday'
import { Footer, Header } from './components/common'
import { Main } from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main>
        <Intheday/>
      </Main>
      <Intheday/>
    </div>
  )
}

export default App
