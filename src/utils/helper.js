import { MONTH } from "./constants";


export const dateParse = (date) => {
    const d = new Date(date);
    return `${d.getDate()} ${MONTH[d.getMonth()-1]} ${d.getFullYear()}`;
}