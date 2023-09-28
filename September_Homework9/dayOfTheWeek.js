function getDay(date) {
    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();

    return dayArray[dayIndex];
}

console.log(getDay("12/07/2016")) //"Wednesday"
console.log(getDay("09/04/2016")) //"Sunday"
console.log(getDay("12/08/2011")) //"Thursday"