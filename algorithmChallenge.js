const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to find the second-largest number in an array
function secondLargest(arr) {
    const uniqueValues = new Set(arr);
    const sortedUniqueValues = Array.from(uniqueValues).sort((a, b) => b - a);
    
    if (sortedUniqueValues.length < 2) {
        return null; // Return null if there is no second largest
    }
    
    return sortedUniqueValues[1];
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// Get user input for reversing a string
rl.question("Enter a string to reverse: ", (inputString) => {
    const reversed = reverseString(inputString);
    console.log(`Reversed String: ${reversed}`);

    // Get user input for finding the second largest number
    rl.question("Enter numbers separated by commas (e.g., 10,20,4,45,99): ", (inputArray) => {
        const numberArray = inputArray.split(',').map(Number);
        const secondLargestNumber = secondLargest(numberArray);
        console.log(`Second Largest Number: ${secondLargestNumber}`);

        // Get user input for checking palindrome
        rl.question("Enter a string to check if it's a palindrome: ", (palindromeTest) => {
            const isPalin = isPalindrome(palindromeTest);
            console.log(`Is Palindrome: ${isPalin}`);
            
            // Close the readline interface
            rl.close();
        });
    });
});