import React from 'react'
import { Link, NavLink,  useNavigate } from 'react-router-dom'

const Links = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("user")
   navigate('/login') 
  }



  


  return (
     <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Routing</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" >Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/carrer" >Carrer</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/pricing" >Pricing</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/team" >Team</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact" >Contact</NavLink>
        </li>
        <li class="nav-item"> 
          <NavLink className="nav-link active" aria-current="page" to={`/dashboard/${localStorage.getItem("email")}`} >Dashboard</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={`/profile/${localStorage.getItem("user")}`} >Profile</NavLink>
        </li>
        <li class="nav-item">
          <button className="nav-link active btn btn-danger" onClick={logout} aria-current="page" >Logout</button>
        </li>
        
     
      </ul>
    </div>
  </div>
</nav>


     </>
  )
}

export default Links