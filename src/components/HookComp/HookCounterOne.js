



import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = `You Click ${count} times`
    })
    return (
        <div>
            <h1>Hook Counter</h1>
            <button onClick={() => setCount(count+1)}>
                Click {count} times
            </button>
        </div>
    )
}

export default HookCounterOne;






