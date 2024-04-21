import {useState, useEffect} from 'react';
import {base_url, markets} from "../helpers/constants";
import {FetchRatesResult, Rates} from "../types/types";

export function useFetchRates(): FetchRatesResult {

    const [rates, setRates] = useState<Rates[]>([{RUB: 0, USD: 0, EUR: 0}]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchData() {
        try {
            const requests = markets.map(market => fetch(`${base_url}/${market}`));
            const responses = await Promise.all(requests);
            const data = await Promise.all(responses.map(res => res.json()));
            const allRates = data.map(marketData => marketData.rates);
            setRates(allRates);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return {rates, loading, error};
}

