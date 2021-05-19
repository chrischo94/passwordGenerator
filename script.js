// Assignment Code
var generateBtn = document.querySelector("#generate");

var newPassword = "";
//array of special characters (string)
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
//array of lower case characters (string)
loweraCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//array of upper case characters (string)
upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//array of numeric characters (string)
numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// function that prompts the user for their password selections

//define variable to store the length of the array
//alert to ask for length of password, assign to length variable
//create conditional such as: if user input is not a a number, reject return
//if user input is < 8, rejects; return
//if user input is > 128 rejects return
function userLength () {
  passwordLength = window.prompt("How many characters would you like your password to be? Must be between 8 and 128 characters");
    if (passwordLength <8) {
      alert("Not enough characters!");
      passwordLength();
    } else if (passwordLength > 128) {
      alert("Too many characters!");
      passwordLength();
    } else if (isNaN(passwordLength)) {
      alert("Please enter a number!");
      passwordLength ();
    } else {
      return passwordLength();

    }
  } 
userLength ();


// var to store the user's choice about special characters = answer to their confirm
//do you want special characters?
//confirm for each group of chracters 
function confirmSpecial() {
  yesSpecial = window.confirm("Do you want special characters in your password?")
}

function confirmSpecial() {
  yesSpecial = window.confirm("Do you want special characters in your password?")
}

//conditional if all chracter confirms are false, tell user they must pick at least one group and restart process


//function to randomly generate password (array)
//math.floor() rounds to whole number
//math.random() random number
//create variable = Math.floor(Math.random() * array.length)
//return variable

//function to generate password
//want to get our user input
//var = password options function passwordSelection


// //write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
