// Assignment Code

var generateBtn = document.querySelector("#generate");

var finalPassword = "";
//array of special characters (string)
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
//array of lower case characters (string)
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//array of upper case characters (string)
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//alt? var = upperCaseCharacters = lowerCaseCharacters.toUpperCase();

//array of numeric characters (string)
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// function that prompts the user for their password selections

//define variable to store the length of the array
//alert to ask for length of password, assign to length variable
//create conditional such as: if user input is not a a number, reject return
//if user input is < 8, rejects; return
//if user input is > 128 rejects return
function userLength() {
  passwordLength = window.prompt("How many characters would you like your password to be? Must be between 8 and 128 characters");
    if (passwordLength <8) {
      alert("Not enough characters!");
      userLength();
    } else if (passwordLength > 128) {
      alert("Too many characters!");
      userLength();
    } else if (isNaN(passwordLength)) {
      alert("Please enter a number!");
      userLength();
    } else {
      return passwordLength;

    }
  } 
//userLength ();


// var to store the user's choice about special characters = answer to their confirm
//do you want special characters?
//confirm for each group of chracters 

function confirmSpecial() {
  yesSpecial = window.confirm("Do you want special characters in your password?")
}

function confirmLower() {
  yesLower = window.confirm("Do you want lower case letters in your password?")
}

function confirmUpper() {
  yesUpper = window.confirm("Do you want upper case letters in your password?")
}

function confirmNumber() {
  yesNumber = window.confirm("Do you want numbers in your password?")
}

//conditional if all chracter confirms are false, tell user they must pick at least one group and restart process
// function confirmCheck() {
//   if (confirm("Do you want special characters in your password?") === false && confirm("Do you want lower case letters in your password?") == false && confirm("Do you want upper case letters in your password?") == false && confirm("Do you want numbers in your password?") == false) {
//     alert("Please select at least one group");
//     confirmCheck();
//   } else {
//       generatePassword();
//   }
// }

//confirmCheck();

//function to randomly generate password (array)
//math.floor() rounds to whole number
//math.random() random number
//create variable = Math.floor(Math.random() * array.length)
//return variable

//random special character
function randomSpecial() {
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

function randomLower() {
  return lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
}
function randomUpper() {
  return upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
 }
function randomNumeric() {
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
}



//function to generate password
//want to get our user input
//var = password options function passwordSelection
function createPassword() {
  finalPassword = "";
  for (i = 0; i < passwordLength; i++) {
    var combinedArray = [];
    if (yesSpecial === true) {
      combinedArray.push(randomSpecial());
      } 
    if (yesLower === true) {
      combinedArray.push(randomLower());
      } 
    if (yesUpper === true) {
      combinedArray.push(randomUpper());
      } 
    if (yesNumber === true) {
      combinedArray.push(randomNumeric());
      } 
    var finalArray = combinedArray[Math.floor(Math.random() * combinedArray.length)]
    finalPassword += finalArray;
  }
}

  
console.log(checkCharacterType)

function makePassword() {
  createPassword()
  return finalPassword;
}


function checkCharacterType(){
  if (yesSpecial === false && yesLower=== false && yesUpper=== false && yesNumber === false) {
      alert("You must choose at least 1 character type!");
      return generatePassword();
  } else {
    return makePassword();
    }
}

function generatePassword() {
  userLength();
  confirmSpecial();
  confirmLower();
  confirmUpper();
  confirmNumber();
  checkCharacterType();
  return makePassword();
}


// //write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//console.log(finalPassword)