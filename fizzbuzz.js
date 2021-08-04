// Ask user for a number
// Initialize counter at 1
// While number is less than or equal to user input
// Check if divisible by three and five
// Print out number or Fizz / Buzz depending on divisibility

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz to: "));

for (let i = 1; i <= answer; i++) {
    let outputString = ''
    if (i%3 ===0) {
        outputString += "Fizz";
    }
    if (i%5 ===0) {
        outputString += "Buzz";
    }
    if (i%3 !== 0 && i%5 !== 0) {
        outputString = i;
    }
    console.log(outputString);
}