

const args = process.argv.slice(2);

// Join the input arguments into a single string
const input = args.join(' ').toLowerCase();

// Define regular expressions for parsing the input
const addPattern = /what is (\d+) plus (\d+)\?/;
const subtractPattern = /what is (\d+) minus (\d+)\?/;
const multiplyPattern = /what is (\d+) multiplied by (\d+)\?/;
const dividePattern = /what is (\d+) divided by (\d+)\?/;

let result;

// Check the input against each pattern and calculate the result
if (addPattern.test(input)) {
    const matches = input.match(addPattern);
    const num1 = parseInt(matches[1]);
    const num2 = parseInt(matches[2]);
    result = `${num1} plus ${num2} is ${num1 + num2}`;
} else if (subtractPattern.test(input)) {
    const matches = input.match(subtractPattern);
    const num1 = parseInt(matches[1]);
    const num2 = parseInt(matches[2]);
    result = `${num1} minus ${num2} is ${num1 - num2}`;
} else if (multiplyPattern.test(input)) {
    const matches = input.match(multiplyPattern);
    const num1 = parseInt(matches[1]);
    const num2 = parseInt(matches[2]);
    result = `${num1} multiplied by ${num2} is ${num1 * num2}`;
} else if (dividePattern.test(input)) {
    const matches = input.match(dividePattern);
    const num1 = parseInt(matches[1]);
    const num2 = parseInt(matches[2]);
    result = `${num1} divided by ${num2} is ${num1 / num2}`;
} else {
    result = "Sorry, I couldn't understand the question.";
}

// Output the result
console.log(result);

