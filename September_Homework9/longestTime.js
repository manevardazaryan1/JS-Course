function longestTime(h, m, s) {
    const minute = m / 60;
    const second = s / 3600;
    if (h > minute && h > second) {
        return h;
    } else if (minute > h && minute > second){
        return m;
    } else {
        return s
    }
}
  
  // Example usage:
  console.log(longestTime(1, 59, 3598)); // ➞ 1
  console.log(longestTime(2, 300, 15000)); // ➞ 300
  console.log(longestTime(15, 955, 59400)); // ➞ 59400