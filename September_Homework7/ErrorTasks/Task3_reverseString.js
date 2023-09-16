function reverseString(s) {
    try {
      if (typeof s !== "string") 
        throw new Error("s.split is not a function");
      s = s.split("").reverse().join("");
      return s;
    } catch (error) {
      return error.message;
    }
  }