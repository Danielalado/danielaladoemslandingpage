// import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
// import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
// import Gadgets from './Components/Gadgets/Gadget'
// import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

export default function App() {
  // const [count, setCount] = useState(0)
  return(
    <>
      <div>
      <Navbar />
      <Routes>
       <Route path="/" element= {<Home />} />
       <Route path="/cart" element= {<Cart />} />

      </Routes>
      {/* <Hero />
      <About />
      <Gadgets /> */}
      <Footer />
     </div>
    </>
  )
  

}


