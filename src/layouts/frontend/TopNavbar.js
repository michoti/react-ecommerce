import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className='container'>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className='nav-link active' to='/' >Home</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link active' to='/login'>Login</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link active' to='/register'>Register</Link>
                </li>
            </ul>
            </div>
        </nav>

    </>
  )
}

export default TopNavbar