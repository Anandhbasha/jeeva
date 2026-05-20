import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { PassValue } from '../../App'
const Navbar = () => {
const {count} = useContext(PassValue)
  return (
    <div className='Navbar'>
      <Link to="/">AllProducts</Link>
      <Link to="/mens">Mens</Link>
      <Link to="/womens">Womens</Link>
      <p>{count}</p>
    </div>  
  )
}

export default Navbar