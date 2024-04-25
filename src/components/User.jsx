import React from 'react'
import Button from '../ui/Button'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';



function User() {
    const navigate = useNavigate();
    const { logout, user } = useAuth();


    function handleLogout() {
        logout();
        navigate("/")
    }

    return (
        <div className='fixed z-[999] flex gap-3 items-center top-3 right-3 bg-dark--1 p-3 rounded-md'>
            <img src={user.avatar} alt={user.name} className='h-10 rounded-full' />
            <span className='font-semibold'>Welcome, {user.name}</span>
            <Button type="logout" onClick={handleLogout}>logout</Button>
        </div>
    )
}

export default User