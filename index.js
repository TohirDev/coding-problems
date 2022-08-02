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
  let input = str
  if(input.length >= 4 && input.length <= 25) {
    let lastEl = input[input.length -1]
    if(lastEl !== '_') {
      if(!input.includes('!') && !input.includes('@')){
        console.log('ok')
        for (let i = 0; i < alphabet.length; i++) {
          if (input[0] === alphabet[i]) {
            console.log("starts with " + input[0]);
          } else {
            console.log('raqam bilan boshlanishi mumkin emas')
          }
        } 
      } else {
        console.log('Bu belgilar mumkin emas')
      }
      
    } else {
      console.log('Oxiri _ bn tugashu mumkin emas')
    }
  } else {
    console.log('Yetarli harf yo\'q')
  }
 
  return input;
}


// BOSHQA MASALA


function str(txt) {
  let a = txt.split("").reverse().join('')
  console.log(a, txt)
  if(a === txt){
      console.log('yaxshi')
  } else {
      console.log('yomon')
  }
}

str('kiyik')

