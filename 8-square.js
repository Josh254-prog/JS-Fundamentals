const sizeStr = process.argv[2];
const size = parseInt(sizeStr);
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
    const printSquareRow = (numRows, rowContent) => {
        if  (numRows === 0) {
            return;
        }
        console.log(rowContent);
        printSquareRow(numRows - 1, rowContent);
    }
    const rowOfX = "X".repeat(size);
    printSquareRow(size, rowContent = rowOfX);
}   