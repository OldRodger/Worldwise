import React from 'react'
import { NavLink } from 'react-router-dom'

function AppNav() {

    const links = ["Cities", "Countries"]

    return <nav>
        <ul className='flex bg-dark--2 rounded-md text-sm font-semibold'>
            {links.map((link, idx) => (
                <li key={idx}>
                    <NavLink to={link.toLowerCase()} className={({isActive}) => `inline-block px-6 py-1 rounded-md ${isActive && 'bg-dark--0'}`}>{link}</NavLink>
                </li>
            ))}
        </ul>
    </nav>
}

export default AppNav