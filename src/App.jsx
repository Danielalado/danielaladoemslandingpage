// import { useState } from 'react'

import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Gadgets from './Components/Gadgets/Gadget'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

export default function App() {
  // const [count, setCount] = useState(0)
  return(
    <>
      <div>
      <Navbar />
      <Hero />
      <About />
      <Gadgets />
      <Footer />
     </div>
    </>
  )
  

}


