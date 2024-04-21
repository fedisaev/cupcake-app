import {useState, useEffect} from 'react';
import {findLowestRate} from "../helpers/helpers";

export function useLowestRate(rates: number[]): string {
    const [lowestRate, setLowestRate] = useState<string>('');

    useEffect(() => {
        const lowestRateMarket = findLowestRate(rates);
        setLowestRate(lowestRateMarket);
    }, [rates]);

    return lowestRate;
}
