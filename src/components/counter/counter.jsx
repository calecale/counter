import React, {useState} from 'react'; //mozes da importujes ili svaku zasebno ili u istom redu sa zarezima



function Counter(){

//hook
const [counterValue, setCounterValue] = useState(0);

//funkcije
const increaseValue = () => {
    setCounterValue(counterValue + 1);
};

const decreaseValue = () => {
    setCounterValue(counterValue - 1);
};

console.log(counterValue);

//return
    return(
        <div>
            <button onClick={increaseValue}>+</button>
            <span>{counterValue}</span> 
            <button onClick={decreaseValue}>-</button>
        </div>
    )
    
}

export default Counter;
