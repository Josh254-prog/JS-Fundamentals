const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];
let outputString = "";
let i = 0; 
while (i < messages.length) {
  outputString += messages[i];
  if (i < messages.length - 1) {
    outputString += "\n"; 
  }
  i++;
}
console.log(outputString);     