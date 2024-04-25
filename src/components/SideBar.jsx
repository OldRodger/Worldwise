import React from 'react'
import Logo from '../ui/Logo'
import Footer from './Footer'
import AppNav from './AppNav'
import { Outlet } from 'react-router-dom'

function SideBar() {
    return (
        <aside className='bg-dark--1 py-12 basis-[34rem]'>
            <div className="w-10/12 mx-auto h-full flex flex-col items-center gap-5">
                <Logo size='xl' />
                <AppNav />
                <Outlet />
                <footer className='mt-auto'>
                    <p className='text-light--1 text-xs'>&copy; Copyright {new Date().getFullYear()} by Worldwise inc.</p>
                </footer>
            </div>
        </aside>
    )
}

export default SideBar