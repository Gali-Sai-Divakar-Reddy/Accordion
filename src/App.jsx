import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/AccordionComponent/Accordion'
function App() {

  return (
    <div className='bg-gray-100 flex justify-center items-center h-screen'>
      <Accordion/>
    </div>
  )
}

export default App
