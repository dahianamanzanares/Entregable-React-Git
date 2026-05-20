import { useState } from 'react'
import './App.css'
import BodyCards from './components/Bodycards'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <BodyCards/>
     </div>
    </>
  )
}

export default App
