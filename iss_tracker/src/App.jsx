import { useState } from 'react'
import Home from './pages/Home.jsx';
import { Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  

  return (
    <>
       <BrowserRouter>
       <Routes>
      
      <Route path='/' element={<Home />} />
     
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
