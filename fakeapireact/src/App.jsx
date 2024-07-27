import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment from './components/Assignment'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar><br></br><br></br><br></br><br></br>
      
      <Routes>
        <Route path='/' element={<Assignment></Assignment>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App
