let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(alphabet);
function CodelandUsernameValidation(str) {
  // code goes here
  let input = `${str}`.split("");
  console.log(input.length);
  for(let i = 0; i < alphabet.length; i++) {
    if(input[0] === alphabet[i]) {
      console.log('nicee')
    }
  }
  return input;
}

// keep this function call here


console.log(CodelandUsernameValidation("fa_"));
