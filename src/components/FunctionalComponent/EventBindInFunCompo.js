import React, { useState, useEffect } from 'react'

function EventBindInFunCompo() {
    const [message, setMessage] = useState('Hi');

    const handleBtn = () => {
        setMessage('Goodbuy!')
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleBtn}>Click</button>
        </div>
    )
}

export default EventBindInFunCompo
