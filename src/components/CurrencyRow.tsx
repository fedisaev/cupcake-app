import {minFirst, minSecond, minThird} from "../helpers/constants";
import {CurrencyRowProps} from "../types/props";

function CurrencyRow({label, rates, lowestRate}: CurrencyRowProps) {
    return (
        <>
            <div className="item">{label}</div>
            <div className={`item ${lowestRate === minFirst ? 'lowest-rate' : ''}`}>
                {rates.first.toFixed(3)}
            </div>
            <div className={`item ${lowestRate === minSecond ? 'lowest-rate' : ''}`}>
                {rates.second.toFixed(3)}
            </div>
            <div className={`item ${lowestRate === minThird ? 'lowest-rate' : ''}`}>
                {rates.third.toFixed(3)}
            </div>
        </>
    );
}

export default CurrencyRow;