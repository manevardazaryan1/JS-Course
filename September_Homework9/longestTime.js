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
