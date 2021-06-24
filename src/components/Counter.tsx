import { Component, useState } from "react";


const createCount = () => {
    const [counter, setCounter] = useState(0);
    const updateCounter = (value : number) : any => {
        setCounter(counter + value);
    }
    return (
        <div className="Counter">
            <h1>{counter}</h1>
            <h2>Counter</h2>
            <button onClick={updateCounter(1)}>Click Me!</button>
        </div>
    );
};

class CounterClass extends Component {
    render() {
        return createCount();
    }
}

export default CounterClass;
