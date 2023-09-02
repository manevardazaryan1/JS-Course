const createCounter = function() {
    let _count = 0;

    return () => ++_count;
}
