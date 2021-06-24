import {Component, useState} from 'react';

const [counter, setCounter] = useState(0);

function getCounter() : number{
    return counter;
}

function setCount(ah: number) : any { 
    setCounter(ah);
}

class CounterClass extends Component {
    render() {
        return (
            <div className="Counter">
                <h1>{getCounter()}</h1>
                <h2>Counter</h2>
                <button onClick={setCount(getCounter() + 1)}>Click Me!</button>
            </div>
        );
    }
}

export default CounterClass;
