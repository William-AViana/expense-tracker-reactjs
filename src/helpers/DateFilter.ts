import { Item } from "../types/Item";

export const getCuttentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList = [];
    let [yaer, month] = date.split('-');

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(yaer) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i])
        }
    }

    return newList;
}

export const formatDate = (date: Date): string => {
    let yaer = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${yaer}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    return `${months[parseInt(month) - 1]} de ${year}`;
};