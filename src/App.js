import React from 'react'
import Router from './components/Router'
import { useNavigate } from 'react-router-dom'

// import Login from './components/Login'

const App = () => {
  const navigate = useNavigate()
  if(localStorage.getItem("user") == null && localStorage.getItem('email') ==  null){
    navigate('/login')
 }
  return (
    <>
 
    <Router></Router>
    </>
    // <Login></Login>
  )
}

export default App