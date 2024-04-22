export interface Rates {
    RUB: number;
    USD: number;
    EUR: number;
}

export interface FetchRatesResult {
    rates: Rates[];
    loading: boolean;
    error: string | null;
}

export interface Currencies {
    first: number;
    second: number;
    third: number;
}

export interface CurrencyPair {
    label: string;
    rates: number[]
}

export interface dataResponse {
    base: string;
    date: string;
    rates: Rates;
    timestamp: number;
}