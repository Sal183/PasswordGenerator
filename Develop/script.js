// Assignment code here
function generatePassword() {
  var CharSet = "";

  var length = parseInt(window.prompt("Between 8 - 124, please choose the amount of characters you wish your password to have."));
    if (length < 8 || length > 128) {
      window.alert("Too Low or High value, please try again.");
      return;
    }
  
  var Lower = window.confirm("Include lowercase letters?");
    if (Lower) {
        CharSet += 'qwertyuiopasdfghjklzxcvbnm';
    };

  var Upper = window.confirm("Include uppercase letters?");
    if (Upper) {
        CharSet += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    };

  var SpecialCharacters = window.confirm("Include symbols?");
    if (SpecialCharacters) {
        CharSet += '!@#$%^&*';
    };

  var Numbers = window.confirm("Include numbers?");
    if (Numbers) {
        CharSet += '0123456789';
    };
  
  var Password = "";
  for (let i =0; i < length; i++) {
    Password += CharSet[Math.floor(Math.random() * CharSet.length)]
  }
  return Password;
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
