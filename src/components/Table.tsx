import MainRow from "./MainRow";
import {useFetchRates} from "../hooks/useFetchRates";
import CurrencyRow from "./CurrencyRow";
import {useMemo} from "react";
import {CurrencyPair} from "../types/types";
import {useLowestRate} from "../hooks/useLowestRate";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

function Table() {

    const {rates, loading, error} = useFetchRates();

    const rubles = useMemo(() => rates.map(rate => rate.RUB), [rates]);
    const dollars = useMemo(() => rates.map(rate => rate.USD), [rates]);
    const euros = useMemo(() => rates.map(rate => rate.EUR), [rates]);

    const rubToUsd = useMemo(() => rates.map(rate => rate.RUB / rate.USD), [rates]);
    const rubToEur = useMemo(() => rates.map(rate => rate.RUB / rate.EUR), [rates]);
    const eurToUsd = useMemo(() => rates.map(rate => rate.EUR / rate.USD), [rates]);

    const currencyPairs: CurrencyPair[] = [
        {label: "RUB/USD", rates: rubToUsd},
        {label: "RUB/EUR", rates: rubToEur},
        {label: "EUR/USD", rates: eurToUsd}
    ];

    const lowestRateRUB = useLowestRate(rubles);
    const lowestRateUSD = useLowestRate(dollars);
    const lowestRateEUR = useLowestRate(euros);
    const lowestRubToUsd = useLowestRate(rubToUsd);
    const lowestRubToEur = useLowestRate(rubToEur);
    const lowestEurToUsd = useLowestRate(eurToUsd);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <ErrorComponent/>
    }

    return (
        <div className='table'>
            <MainRow/>
            <CurrencyRow label='RUB/CUPCAKE'
                         rates={{first: rates[0].RUB, second: rates[1].RUB, third: rates[2].RUB}}
                         lowestRate={lowestRateRUB}
            />
            <CurrencyRow label='USD/CUPCAKE'
                         rates={{first: rates[0].USD, second: rates[1].USD, third: rates[2].USD}}
                         lowestRate={lowestRateUSD}
            />
            <CurrencyRow label='EUR/CUPCAKE'
                         rates={{first: rates[0].EUR, second: rates[1].EUR, third: rates[2].EUR}}
                         lowestRate={lowestRateEUR}
            />
            {currencyPairs.map(pair => (pair.rates[0] && (
                    <CurrencyRow key={pair.label}
                                 label={pair.label}
                                 rates={{first: pair.rates[0], second: pair.rates[1], third: pair.rates[2]}}
                                 lowestRate={pair.label === 'RUB/USD' ? lowestRubToUsd : pair.label === 'RUB/EUR' ? lowestRubToEur : lowestEurToUsd}
                    />
                )
            ))}
        </div>
    );
}

export default Table;