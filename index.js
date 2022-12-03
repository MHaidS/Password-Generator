const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;

// **************
let showPasswords1El = document.getElementById("showPasswords1");
let showPasswords2El = document.getElementById("showPasswords2");
let getPasswordButtonEl = document.getElementById("getPasswordButton");
// **************

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

// function generateRandomPassword() {
//   let randomPassword = ""
//   for (let i = 0; i < passwordLength; i**) {
//     randomPassword += getRandomCharacter()
//   }
//   return randomPassword
// }
// const generatedPasswordOne = generateRandomPassword()
// console.log("Here is a random password: ", generatedPasswordOne)

getPasswordButtonEl.addEventListener("click", function () {
  let randomPassword1 = "";
  let randomPassword2 = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword1 += getRandomCharacter();
    randomPassword2 += getRandomCharacter();
  }
  showPasswords1El.textContent = randomPassword1;
  showPasswords2El.textContent = randomPassword2;
});
