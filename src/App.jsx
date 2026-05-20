import { useState } from 'react'
import './App.css'
import BodyCards from './components/Bodycards'
import Banner from './components/Banner'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Banner/>
      <BodyCards/>
     </div>
    </>
  )
}

export default App
