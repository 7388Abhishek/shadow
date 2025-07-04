import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='hit'>
    <marquee direction="">
     <h1 className='pro'>
      hello world
     </h1>
     </marquee>
     </div>
    </>
  )
}

export default App
