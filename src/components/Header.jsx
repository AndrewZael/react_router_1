import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  const menu = [
    { to: '/', text: 'Home' },
    { to: '/contacto', text: 'Contacto' }
  ];

  return (
    <header className='d-flex align-items-center justify-content-between px-3 py-2'>
      <nav>
        <ul className='list-unstyled d-flex gap-4 mb-0'>
          {
            menu.map(item => (
              <li><NavLink to={item.to} className='py-2'>{ item.text }</NavLink></li>
            ))
          }
        </ul>
      </nav>
      <Link to="/" className='btn btn-outline-danger'>
          Happy Cake
      </Link>
    </header>
  )
}

export default Header