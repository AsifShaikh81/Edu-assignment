import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/SignUp'
import Login from './Components/Login'
import Welcome from './Components/Welcome'
import AccountSettings from './Components/AccountSetting'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/accountsetting' element={<AccountSettings/>} />
    </Routes>
    </>
  )
}

export default App