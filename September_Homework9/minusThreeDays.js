function minusThreeDays(date) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 3);
  
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1 + "").padStart(2, "0");
    const day = (newDate.getDate() + "").padStart(2, "0");
    
    return [year, month, day].join("-");
}
