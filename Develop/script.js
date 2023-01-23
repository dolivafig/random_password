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
 window.alert("Please choose number between 8 - 128");
 return;
} 
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

if( index === 0 ){
  window.prompt("Please try again")
  return;
}

for(var i = 0; i<lenght; i++){
  var randNumber = Math.floor(Math.random() * holder.length);
  password += holder[randNumber];
 console.log(password)
}
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
}
