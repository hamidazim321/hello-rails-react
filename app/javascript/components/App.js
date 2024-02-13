import React from 'react'
import Greet from './Greet'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <div>
            <h1>Hello Rails React</h1>
            <Link to="/greetings" style={{fontSize: '32px'}}>See Greetings</Link>
          </div>
        } />
        <Route path='/greetings' element={<Greet />} />
      </Routes>
    </div>
  )
}