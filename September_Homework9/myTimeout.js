function myTimeout(callback, interval) {
    function duration() {
        if (interval > 0) {
            interval -= 1;
            console.log(1);
            duration();
        } else {
            callback();
        }   
    }
    duration();
}
