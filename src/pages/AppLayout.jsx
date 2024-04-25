import React, { useEffect } from 'react'
import SideBar from '../components/SideBar'
import Map from '../components/Map'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function AppLayout() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    useEffect(() => {
        if (!isAuthenticated) navigate("/");
    }, [isAuthenticated, navigate])

    if (!isAuthenticated) return null;

    return <main className='w-full h-screen flex text-light--2 '>
        <SideBar />
        <Map />
    </main>
}

export default AppLayout