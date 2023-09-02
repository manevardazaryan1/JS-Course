function permutations(str) {
  const result = [];

  function generate(current, txt) {
    if (txt.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < txt.length; ++i) {
      generate(current + txt[i], txt.slice(0, i) + txt.slice(i + 1));
    }
  }

  generate('', str);
  return result;
}
