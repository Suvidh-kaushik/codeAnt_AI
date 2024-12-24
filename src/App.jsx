import React from 'react'
import SigninPage from './pages/SigninPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SigninPage/>}/>
      <Route path='/home' element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
