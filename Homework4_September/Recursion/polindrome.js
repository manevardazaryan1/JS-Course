const isPalindrome = function(str) {
    if (str.length < 2) 
        return true;
    
    if (str[0] !== str.slice(-1))
        return false;
    
    return isPalindrome(str.slice(1, str.length - 1));
}
