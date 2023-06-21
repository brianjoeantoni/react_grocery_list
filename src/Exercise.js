import React from 'react'
import { useState } from 'react';

//https://www.youtube.com/watch?v=O6P86uwfdR0

function countInitial() {
    console.log('run');
    return 4;
}

const Exercise = () => {

    // const [count, setCount] = useState(4);
    // const [count, setCount] = useState(() => countInitial()); //run out time per refresh
        // const [state, setState] = useState({count: 4, theme: 'blue'});
        // const count = state.count;
        // const theme = state.theme;

    //using 2 hooks for 2 states
    const [count, setCount] = useState(4);
    const [theme, setTheme] = useState('blue');




    function decrementCount() {
            // setState(prevState => {
            //     return {...prevState, count: prevState.count - 1} //use ... to render previous state in an object
            // })
            setCount(prevCount => prevCount - 1);
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
        setTheme('red');
    }

    return (
    <div>
        <p>Exercise</p>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
    </div>
    )
}

export default Exercise