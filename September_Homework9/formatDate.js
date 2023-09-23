const formatDate = (date) => {
    const months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${date.getDate() + 1} ${months[date.getMonth()]} ${date.getFullYear()}`;
}



