import { Component, useState } from "react";

const CounterClass = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="Counter">
            <h1>{counter}</h1>
            <h2>Counter</h2>
            <button onClick={ () => setCounter(counter + 1) }>Click Me!</button>
        </div>
    );
};

export default CounterClass;
