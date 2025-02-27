function divideNumbers(a, b) {
    switch (true) {
        case b === 0:
            console.log("Error: Division by zero is not allowed.");
            break;
        default:
            console.log(`The result of ${a} divided by ${b} is ${a / b}`);
            break;
    }
}

// Example usage
divideNumbers(10, 2); // The result of 10 divided by 2 is 5
divideNumbers(10, 0); // Error: Division by zero is not allowed.