import {CurrencyRowProps} from "../types/props";

function CurrencyRow({label, rates}: CurrencyRowProps) {
    return (
        <>
            <div className='item'>{label}</div>
            <div className='item'>{rates.first.toFixed(3)}</div>
            <div className='item'></div>
            <div className='item'></div>
        </>
    );
}

export default CurrencyRow;