import {minFirst, minSecond, minThird} from "./constants";
export function findLowestRate(data: number[]) {
    const minRate = Math.min(...data);
    const index = data.indexOf(minRate);
    return index === 0 ? minFirst : index === 1 ? minSecond : minThird;
}
