import { useState } from 'react'
import './App.css'
import BodyCards from './components/Bodycards'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar/>
      <Banner/>
      <BodyCards/>
      <Footer/>
     </div>
    </>
  )
}

export default App
