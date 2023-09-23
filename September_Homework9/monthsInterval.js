function monthsInterval(date1, date2) {
    const months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const start = date1.getFullYear() < date2.getFullYear() ? date1: date2;
    const end = date1.getFullYear() > date2.getFullYear() ? date1: date2;

    const startMonth = start.getMonth();
    const endMonth = end.getMonth();

    const monthsArray = [];

    if (startMonth >= endMonth) {
        for (let month = startMonth; month < months.length; ++month) {
            monthsArray.push(months[month]);
        }

        for (let month = 0; month <= endMonth; ++month) {
            monthsArray.push(months[month]);
        }
    } else {
        for (let month = start; month <= end; ++month) {
            monthsArray.push(months[month]);
        }
    }

    return monthsArray;
}





