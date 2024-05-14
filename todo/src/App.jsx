import { useState } from 'react'
import './App.css'
import Home from './Home'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Home/>
   </div>
  )
}

export default App
