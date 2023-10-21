function palindrome(str) {
  // Elimina caracteres no alfanuméricos y los pasa a minúsculas
  var cleanString = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Comparar la cadena original con su reverso
  var reversedString = cleanString.split("").reverse().join("");

  return cleanString === reversedString;
}

console.log(palindrome("eye")); // true
console.log(palindrome("RaceCar")); // true
console.log(palindrome("race CAR")); // true
console.log(palindrome("2A3*3a2")); // true
console.log(palindrome("2A3 3a2")); // true
console.log(palindrome("hello")); // false
console.log(palindrome("OpenAI")); // false
