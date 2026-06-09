// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Hero from './Components/Hero/Hero'
import HeroDescription from './Components/HeroDescription/HeroDescription'
import Navbar from './Components/Navbar/Navbar'

export default function App() {
  // const [count, setCount] = useState(0)
  return(
    <>
      <div>
      <Navbar />
      <Hero />
      <HeroDescription />
     </div>
    </>
  )
  

}


