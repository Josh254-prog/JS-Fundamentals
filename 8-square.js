const sizeStr = process.argv[2];
const size = parseInt(sizeStr);
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
    const row0fX = "X".repeat(size);
    let i = 0;  
    while (i < size) {
        console.log(row0fX);
        i++;
    }
}   