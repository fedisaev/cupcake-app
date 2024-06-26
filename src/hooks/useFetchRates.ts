import {useState, useEffect} from 'react';
import {base_url, markets} from "../helpers/constants";
import {dataResponse, FetchRatesResult, Rates} from "../types/types";

export function useFetchRates(): FetchRatesResult {

    const [rates, setRates] = useState<Rates[]>([{RUB: 0, USD: 0, EUR: 0}]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchData() {
        try {
            const requests = markets.map(market => fetch(`${base_url}/${market}`));
            const responses: Response[] = await Promise.all(requests);
            const data: dataResponse[] = await Promise.all(responses.map(res => res.json()));
            const allRates: Rates[] = data.map(marketData => marketData.rates);
            setRates(allRates);
            setLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error fetching exchange rates:', error);
                setLoading(false);
                setError(error.message);
            }
        }
    }

    async function fetchUpdateData() {
        try {
            const requests = markets.map(market => fetch(`${base_url}/${market}/poll`));
            const responses: Response[] = await Promise.all(requests);
            const data: dataResponse[] = await Promise.all(responses.map(res => res.json()));
            const allRates: Rates[] = data.map(marketData => marketData.rates);
            setRates(allRates);
            await fetchUpdateData();
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error fetching exchange rates:', error);
                setError(error.message);
            }
        }
    }

    useEffect(() => {
        let isMounted = true;

        const fetchDataAndStartPolling = async () => {
            await fetchData();
            if (isMounted) {
                await fetchUpdateData();
            }
        };

        fetchDataAndStartPolling();

        return () => {
            isMounted = false;
        };

    }, []);

    return {rates, loading, error};
}

