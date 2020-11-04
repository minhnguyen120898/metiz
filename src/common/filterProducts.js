export const checkShowingProduct = (date) => {
    const convertDate = date.constructor === String ? new Date(date) : NaN;
    const toDay = new Date();

    const result = (convertDate > toDay) - ( convertDate < toDay);
    return result < 1;
}

export const checkComingProduct = (date) => {
    const convertDate = date.constructor === String ? new Date(date) : NaN;
    const toDay = new Date();

    const result = (convertDate > toDay) - ( convertDate < toDay);
    return result === 1;
}