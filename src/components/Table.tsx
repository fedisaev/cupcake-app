import MainRow from "./MainRow";
import CurrencyRow from "./CurrencyRow";

function Table() {
    return (
        <div className='table'>
            <MainRow/>
            <CurrencyRow label='RUB/CUPCAKE'/>
            <CurrencyRow label='USD/CUPCAKE'/>
            <CurrencyRow label='EUR/CUPCAKE'/>
            <CurrencyRow label='RUB/USD'/>
            <CurrencyRow label='RUB/EUR'/>
            <CurrencyRow label='EUR/USD'/>
        </div>
    );
}

export default Table;