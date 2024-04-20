import './App.scss';
import {useState} from "react";
import logo from '../assets/cupcake_logo.png';

function App() {
    const [counter, setCounter] = useState(0);

    const handleCounter = () =>
        setCounter(st => st + 1);
    return (
        <>
            <img src={logo} alt=""/>
            <div className='count'>{counter}</div>
            <button className='button'
                    onClick={handleCounter}
            >
                <span>+</span>
            </button>
        </>
    );
}

export default App;