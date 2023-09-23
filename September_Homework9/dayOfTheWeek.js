function dayOfTheWeek(date) {
    const monthArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const getDate = new Date(Date.parse(date));

    return monthArray[getDate.getDay()];
}
