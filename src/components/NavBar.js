import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const NavBar = () => {
  return (
    <div className='nav'>
        <Link to="/">crud</Link>
        <Link to="/crud">crud-mockserver</Link>
        <Link to="/tables">table</Link>
        <Link to="/filter">filter</Link>
        <Link to="/table">tableFavourite</Link>
        <Link to="/select">selectFiled</Link>
        <Link to="/forms">FormHandling</Link>







    </div>
  )
}

export default NavBar