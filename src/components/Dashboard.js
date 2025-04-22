import React from 'react'
import Links from './Links'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
    
    <Links></Links>
    <h1>Dashboard</h1>
    <h3>Wlecome {useParams().email}</h3>
    </>
  )
}

export default Dashboard