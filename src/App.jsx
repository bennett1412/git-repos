import { useState } from 'react'
import './styles/app.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Home/>
    </div>
  )
}

export default App
