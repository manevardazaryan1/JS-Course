function sumOfDigits(n) {
    if (n < 10)
      return n;
    else
      return (n % 10) + sumOfDigits(Math.floor(n / 10));
  }