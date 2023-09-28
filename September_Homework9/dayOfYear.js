function dayOfYear(date) {
    const getDate = new Date(date);
    const startOfYear = new Date(getDate.getFullYear(), 0, 1);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const daysDifference = Math.floor((getDate - startOfYear) / millisecondsPerDay);

    return daysDifference + 1;
}
