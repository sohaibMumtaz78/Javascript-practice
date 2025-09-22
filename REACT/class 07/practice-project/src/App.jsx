import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import LoginPage from '../pages/login';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='login' element="LoginPage"/>
      </Routes>
    </>
  )
}

export default App
