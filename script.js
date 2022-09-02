// Assignment code here
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()";
var numberCharacters = "0123456789";
var allowedCharacters = "";

function generatePassword() {
  var passLength= prompt("Please choose a password length between 8 and 128 characters long.");
  if (passLength < 8 || passLength > 128) {
    alert("Your password must be between 8 and 128 characters. Please Try again.")
    return(generatePassword());
  }
  if (confirm("Would you like to include upper case characters?")){
    allowedCharacters = allowedCharacters.concat(upperCaseCharacters);
  }
  if (confirm("Would you like to include lower case characters?")){
    allowedCharacters = allowedCharacters.concat(lowerCaseCharacters);
  }
  if (confirm("Would you like to include special characters?")){
    allowedCharacters = allowedCharacters.concat(specialCharacters);
  }
  if (confirm("Would you like to include numbers?")){
    allowedCharacters = allowedCharacters.concat(numberCharacters);
  }
  if (allowedCharacters.length <= 0) {
    alert("At least 1 category of characters must be included in your password. Please try again.");
    return(generatePassword());
  };

  var passwordArray = [];

  for (var i = 0; i < passLength; i++) {
      var random = allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
      passwordArray.push(random);
  }

  var password = passwordArray.join("");
  return password;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
