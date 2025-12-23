import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardPage from './Pages/cardPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CardPage />
    </>
  )
}

export default App
