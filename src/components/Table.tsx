import MainRow from "./MainRow";
import CurrencyRow from "./CurrencyRow";
import {useEffect, useState} from "react";
import {Rates} from "../types/types";
import {base_url} from "../constants/constants";
function Table() {

    const [rates, setRates] = useState<Rates>({RUB: 0, USD: 0, EUR: 0});
    const [rubToUsd, setRubToUsd] = useState<number>(0);
    const [rubToEur, setRubToEur] = useState<number>(0);
    const [eurToUsd, setEurToUsd] = useState<number>(0);

    async function fetchRates() {
        try {
            const res = await fetch(`${base_url}/first`);
            const data = await res.json();
            const {RUB, USD, EUR} = data.rates;
            setRates({RUB, USD, EUR});
            setRubToUsd(RUB / USD);
            setRubToEur(RUB / EUR);
            setEurToUsd(EUR / USD);
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    }

    useEffect(() => {
        fetchRates();
    }, []);

    return (
        <div className='table'>
            <MainRow/>
            <CurrencyRow label='RUB/CUPCAKE' rates={{first: rates.RUB}}/>
            <CurrencyRow label='USD/CUPCAKE' rates={{first: rates.USD}}/>
            <CurrencyRow label='EUR/CUPCAKE' rates={{first: rates.EUR}}/>
            <CurrencyRow label='RUB/USD' rates={{first: rubToUsd}}/>
            <CurrencyRow label='RUB/EUR' rates={{first: rubToEur}}/>
            <CurrencyRow label='EUR/USD' rates={{first: eurToUsd}}/>
        </div>
    );
}

export default Table;