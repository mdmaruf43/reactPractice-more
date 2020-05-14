import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1);
    }
    useEffect(() => {
        function doSomething(someProp) {
            console.log(someProp);
        }
        doSomething(2);
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [2])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter








