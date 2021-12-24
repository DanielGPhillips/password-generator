// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialCharacters = "!@#$%^&*()"
var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var symbolsArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?"]
var numbersArray = ["0","1","2","3","4","5","6","7","8","9"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generatePassword function
 
function generatePassword() {
  var passwordValid = true;
  var passwordLength = prompt("Please enter the number of characters you want for your password.  It must be more than 8 but less than 128.");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    passwordValid = false; 
  }
  while(passwordValid === false) {
    passwordLength = window.prompt("Please enter a valid number.", "8 to 12")
    if ((passwordLength >= 8) && (passwordLength <=128)) {
      passwordValid = true;
    }
    if ((passwordLength < 8) || (passwordLength > 128)) {
      passwordValid = false
    }
  }
  console.log(passwordLength);
  var numbers = confirm("Would you like numbers in your password?");
  console.log("Numbers:" + numbers);
  var lowerCases = confirm("Would you like lowercase letters in your password?");
  console.log("Lowercase:" + lowerCases);
  var upperCases = confirm("Would you like uppercase letters in your password?");
  console.log("Uppercase:" + upperCases);
  var special = confirm("Would you like special characters in your password?");
  console.log("Special:" + special);

  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * (9-0)));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  }
    // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

    // empty string variable for the for loop below
  var randomPasswordGenerated = "";

    // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  console.log(randomPasswordGenerated);
  return randomPasswordGenerated;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
