import React from 'react'
import PageNav from '../components/PageNav'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <PageNav />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root