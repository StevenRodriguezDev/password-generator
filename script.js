// Assignment Code
//VARIABLES DECLARATIONS
var generateBtn = document.querySelector("#generate"); //storing a ref to the button generate password
var userCharsLength;
var specialCharArr = ["$", "+", "~", "#", "-", "_", "!", "*", "^", "%"];
var numericArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

var userChoice = [];
//FUNCTIONS
function generatePassword() {
  //capture user lenngth for password
  var userCharsLength = prompt("how many characters would you like?");
  if (userCharsLength < 8 || userCharsLength > 128) {
    alert("choose num from 8-128");
    generatePassword();
  }
  var specialChar = confirm("click ok to confirm special characters");
  var numeric = confirm("click ok to numeric characters");
  var lowerCase = confirm("click ok to confirm lower case characters");
  var upperCase = confirm("click ok to confirm upper case characters");
  if (!specialChar && !numeric && !lowerCase && !upperCase) {
    alert("please try again");
    generatePassword();
  }
  // console.log(userCharsLength);
  // console.log(specialChar);
  // console.log(numeric);
  // console.log(lowerCase);
  // console.log(upperCase);

  var userOptions = {
    length: userCharsLength,
    willHaveSpecChars: specialChar,
    willHaveNumChars: numeric,
    willHaveLowChars: lowerCase,
    willHaveUppChars: upperCase,
  };

  if (userOptions.willHaveSpecChars) {
    userChoice = userChoice.concat(specialCharArr);
    // var specialCharIndex = Math.floor(Math.random() * specialChar.length);
    // var specialPassword = specialChar[specialCharIndex];
    //randomly grab a special char from array
    //push into the results array
  }
  if (userOptions.willHaveNumChars) {
    userChoice = userChoice.concat(numericArr);

    //randomly grab a num char from array
    //push into the results array
  }
  if (userOptions.willHaveLowChars) {
    userChoice = userChoice.concat(lowerCaseArr);
    //randomly grab a low char from array
    //push into the results array
  }
  if (userOptions.willHaveUppChars) {
    userChoice = userChoice.concat(upperCaseArr);
    //randomly grab a upp char from array
    //push into the results array
  }
  // console.log(userOptions);

  var result = [];
  //will store random password
  //push method to add to this array and will return to the user
  for (var i = 0; i < userCharsLength; i++) {
    var index = Math.floor(Math.random() * userChoice.length);
    result.push(userChoice[index]);
  }
  console.log(result);
  //will use this arr to combine all values

  console.log(userChoice);
  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //a ref to the text area element

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
