import {Currencies} from "./types";

export interface CurrencyRowProps {
    label: string;
    rates: Currencies;
    lowestRate: string;
}