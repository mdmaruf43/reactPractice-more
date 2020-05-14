import React, {useState} from 'react'

function FunctionState() {
    const [message, setMessage] = useState('Welcome Rajib')
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thanks for subscribe')}>Subscribe</button>
        </div>
    )
}

export default FunctionState
