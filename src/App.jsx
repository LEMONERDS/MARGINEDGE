import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Break from './components/Break'
import Profit from './components/Profit'
import DiscountCalculator from './components/DiscountCalculator';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Break' element={<Break />}/>
        <Route path='/Profit' element={<Profit />}/>
        <Route path='/DiscountCalculator' element={<DiscountCalculator />}/>
      </Routes>
    </div>
  )
}

export default App