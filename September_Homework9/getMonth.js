function getMonth(month) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    if (month >= 1 && month <= 12) {
      return months[month - 1];
    } else {
        throw new Error("Invalid month number");
    }
  }
  