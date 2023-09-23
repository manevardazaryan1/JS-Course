function monthsInterval(date1, date2) {
    const months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    const start = month1 < month2 ? month1: month2;
    const end = month1 + month2 - start;

    const monthsArray = [];

    for (let month = start; month <= end; ++month){
        monthsArray.push(months[month]);
    }

    return monthsArray;
}



