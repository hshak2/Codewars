function checkVowel(string, position) {
    const vowels = ["a", "e", "i", "o", "u"];
    // good luck
    string = string.toLowerCase()
    if(vowels.includes(string[position])) {
     return true;
    } else {
      return false;
    }
  };