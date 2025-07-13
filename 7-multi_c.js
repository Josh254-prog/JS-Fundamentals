const arg = process.argv[2];
const num0ccurrences = parseInt(arg);
if (isNaN(num0ccurrences) || num0ccurrences <= 0) {
  console.log("Missing number of occurrences");
} else {
    let output = "";
    let i = 0;
    while (i < num0ccurrences) {
        output += "C is fun\n";
        i++;
    }
    console.log(output);
}