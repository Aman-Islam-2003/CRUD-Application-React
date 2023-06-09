import React from 'react'
import { Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-5">
  <a className="navbar-brand" href="#">CRUD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
  <Link to="/users/add" className='btn btn-outline-light'>Add User</Link>
</nav>
    </div>
  )
}

export default Navbar;
