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
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function CodelandUsernameValidation(str) {
  let input = `${str}`.split("");
  if(input.length >= 4 && input.length <= 25) {
    let lastEl = input[input.length -1]
    if(lastEl !== '_') {
      if(!input.includes('!')){
        console.log('ok')
        for (let i = 0; i < alphabet.length; i++) {
          if (input[0] === alphabet[i]) {
            console.log("starts with " + input[0]);
          }
        } 
      } else {
        console.log('yoq')
      }
      
    } else {
      console.log('mumkinmas')
    }
  } else {
    console.log('not enough')
  }
 
  return input;
}


console.log(CodelandUsernameValidation("fa11w"));
