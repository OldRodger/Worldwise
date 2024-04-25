import React, { useEffect, useRef } from 'react'
import Button from '../ui/Button'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, isAuthenticated } = useAuth()
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email && password)
            login(email, password)
    }

    useEffect(function () {
        if (isAuthenticated) navigate("/app", { replace: true });
    }, [isAuthenticated])

    return (
        <section className='w-full h-screen bg-dark--0 flex items-center'>
            <div className='w-4/12 mx-auto bg-dark--2 py-4 px-8 rounded-xl'>
                <form method='post' className='flex flex-col gap-6' onSubmit={handleSubmit}>
                    <label className='flex flex-col gap-2'>
                        <span className='text-light--2'>Email address</span>
                        <input ref={emailRef} type="email" name='email' placeholder='test@example.com' className='p-2 bg-light--2 rounded-md' />
                    </label>
                    <label className='flex flex-col gap-2'>
                        <span className='text-light--2'>Password</span>
                        <input ref={passwordRef} type="password" name='password' placeholder='password' className='p-2 bg-light--2 rounded-md' />
                    </label>
                    <Button type="primary" className="self-start">login</Button>
                </form>
            </div>
        </section>
    )
}

export default Login

