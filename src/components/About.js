import React from 'react'
import Links from './Links'
import { useLocation, useParams } from 'react-router-dom'

const About = () => {


  console.log(useLocation());
  
  return (
    <>
    <h1>about</h1>
    <Links/>
    </>
  )
}

export default About