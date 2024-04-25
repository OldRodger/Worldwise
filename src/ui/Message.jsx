import React from 'react'

function Message({ message }) {
    return (
        <p className='text-2xl text-center'>
            <span role='img'>👋🏾</span> {message}
        </p>
    )
}

export default Message