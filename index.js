function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(1, 2)); 



function subtractNumbers(a, b) {
    return a - b;
}

console.log(subtractNumbers(5, 3));


function action(type, a, b) {
    if (type === 'add') {
        return addNumbers(a, b);
    } else if (type === 'subtract') {
        return subtractNumbers(a, b);
    } else {
        return 'Error';
    }
}

console.log(action('add', 10, 5));
console.log(action('subtract', 10, 5));
console.log(action('multiply', 10, 5)); 