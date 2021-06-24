import { Component, useState } from "react";
import '../css/Counter.css';

const CounterClass = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="Counter text-center margin-5">
            <h1 className="CountText mb-0">{counter}</h1>
            <h3 className="Count blockquote-footer">Counter</h3>
            <button type="button" className="Count1 btn btn-success" onClick={ () => setCounter(counter + 1) }>Click Me!</button>
        </div>
    );
};

export default CounterClass;
