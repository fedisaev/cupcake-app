import './App.scss';
import logo from '../assets/cupcake_logo.png';
function App() {

    return (
        <>
            <img src={logo} alt="cupcake company logo"/>
            <div className='table'>
                <div className='item'>Pair name/market</div>
                <div className='item'>First</div>
                <div className='item'>Second</div>
                <div className='item'>Third</div>

                <div className='item'>RUB/CUPCAKE</div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>

                <div className='item'>USD/CUPCAKE</div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>

                <div className='item'>EUR/CUPCAKE</div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>

                <div className='item'>RUB/USD</div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>

                <div className='item'>RUB/EUR</div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>

                <div className='item'>EUR/USD</div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>
            </div>
        </>
    );
}

export default App;