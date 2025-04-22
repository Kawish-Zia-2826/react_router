import React, { useEffect } from 'react'
import Links from './Links'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
const Home = () => {
//  const navigate =  useNavigate()
//  navigate('/about',{
//   state:{
//     from:"home"
//    }
//  }) 

useEffect(() => {
<Login></Login>

}, [])
  return (
    <>
{ localStorage.getItem("user")&& localStorage.getItem("email")? <Links></Links>:<Login></Login>}
    
    </>
  )
}

export default Home