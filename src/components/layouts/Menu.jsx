import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul>
        
        <Link to={"/"}> <li>Home</li> </Link>
        <Link to={"/About"}> <li>About</li> </Link>
        <Link to={"/About"}> <li>Shop</li> </Link>
        <Link to={"/"}> <li>Contacts</li> </Link>
        <Link to={"/"}> <li>Journal</li> </Link>
         
    </ul>
  )
}

export default Menu
