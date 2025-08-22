// Import required module

const Solution = () => {
  const readline = require('readline');

  // Create readline interface
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt user for input
  qInterface.question('Enter two numbers separated by space: ', (input) => {
    // Extract two numbers from input string
    const numbers = input.trim().split(/\s+/).map(Number);

    if (numbers.length !== 2 || numbers.some(isNaN)) {
      console.log('Please enter exactly two valid numbers.');
    } else {
      // Calculate max
      const maxNum = Math.max(numbers[0], numbers[1]);
      console.log(`Maximum number is: ${maxNum}`);
    }

    // Close the interface
    qInterface.close();
  });
}

module.exports = Solution;
Solution();

