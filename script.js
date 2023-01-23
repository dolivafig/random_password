var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var characters = "!@#$%^&*()";
var password = "";
var holder = "";
var lenght = 0;
var index = 0;
var passwordText = document.querySelector("#password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

function writePassword() {
//  var password = generatePassword();

  lenght =  prompt("How long of a password? (8-128)")
  
if (lenght < 8 || lenght > 128) {
  //returns of function if criteria is not met
 window.alert("Please choose a number between 8 - 128");
 return;
} 
//adds to a new array if accepted that will hold all the confirmed values
console.log(lenght)
var choicecaps =  confirm("Would you like the password to have capital letters?")
if (choicecaps){
  holder = holder.concat(caps);
  index++;
} 
 console.log(holder)
var choicelower = confirm("Would you like the password to have lowercase letters?")
if (choicelower){
  holder = holder.concat(lower);
 index++;
}

console.log(holder)
var choicechar = confirm("Would you like the password to have special characters?")
if (choicechar){
  holder = holder.concat(characters);
  index++;
}
console.log(holder)

// checks to see if any option was chosen, if not it quits the function
if( index === 0 ){
  window.prompt("Please try again")
  return;
}

// loop to generate password with random numbers
for(var i = 0; i<lenght; i++){
  var randNumber = Math.floor(Math.random() * holder.length);
  password += holder[randNumber];
 console.log(password)
}
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
}
