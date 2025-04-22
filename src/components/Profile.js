import React from 'react'
import Links from './Links'
import { useParams } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <Links></Links>
    <h1>Profile</h1>
    <h3>welcome {useParams().name}</h3>
    
    </>
  )
}

export default Profile