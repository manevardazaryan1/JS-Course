function monthsInterval(date1, date2) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const start = date1 < date2 ? date1 : date2;
    const end = date1 < date2 ? date2 : date1;
    
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    const startMonth = start.getMonth();
    const endMonth = end.getMonth();

    const monthsArray = [];
    let monthsCount = 0;
    
    for (let year = startYear; year <= endYear; year++) {
        const monthStart = (year === startYear) ? startMonth : 0;
        const monthEnd = (year === endYear) ? endMonth : 11;
        
        for (let month = monthStart; month <= monthEnd; month++) {
            monthsCount += 1

            if (monthsCount > 12)
                break;
                
            monthsArray.push(months[month]);
        }
    }

    return monthsArray;
}




