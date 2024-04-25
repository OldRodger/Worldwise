import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

function PageNav() {

  const activeStyle = "text-brand--2"

  const links = [
    {
      path: "/pricing",
      text: "Pricing"
    },
    {
      path: "/product",
      text: "Product"
    },
  ]

  return <nav className='fixed top-0 l-0 w-full h-28 flex items-center'>
    <div className="flex items-center justify-between w-4/5 mx-auto">
      <Logo size='lg' />

      <div className='flex items-center gap-8'>
        <ul className="flex items-center gap-8">
          {links.map(({ path, text }, idx) => (
            <li key={idx} className='text-white text-lg'>
              <NavLink to={path} className={({ isActive }) => `${isActive && activeStyle}`}>{text}</NavLink>
            </li>
          ))}
        </ul>
        <Link to="/login">
          <Button type="primary">login</Button>
        </Link>
      </div>
    </div>
  </nav>
}

export default PageNav;