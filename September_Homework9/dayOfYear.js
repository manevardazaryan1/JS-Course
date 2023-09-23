function dayOfYear(date) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const getDate = new Date(Date.parse(date));
    const month = getDate.getMonth();

    let sumOfMonthDays = 0;
    
    for (let monthDay = 0; monthDay < month; ++ monthDay){
        if (monthDay === 1 && getDate.getFullYear() % 4 === 0)
            monthDays[monthDay] = 28;

        sumOfMonthDays += monthDays[monthDay];
    }

    return sumOfMonthDays + getDate.getDate();
}
