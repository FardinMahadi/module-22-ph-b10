function countVowel(string) {
  let count = 0;
  const vowels = "AEIOUaeiou"; // string of vowels
  for (let str of string) {
    if (vowels.includes(str)) {
      count++;
    }
  }
  return count;
}

console.log(countVowel("Programming"));
