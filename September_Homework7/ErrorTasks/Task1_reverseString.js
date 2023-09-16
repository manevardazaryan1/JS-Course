function reverseString(s) {
    try {
      s = s.split('').reverse().join('');
    } catch (error) {
      return error.message;
    } finally {
      return s;
    }
}