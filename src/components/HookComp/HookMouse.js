
import React, {useState, useEffect} from 'react'

// useEffect with cleanup
function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=> {
        console.log('useEffect callsed');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse

