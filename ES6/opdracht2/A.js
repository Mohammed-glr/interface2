function multyply(a, b) {
    return a * b;
}

function greet(name) {
    return `Hello, ${name}!`;
}

const double = (num) => {
    return 100 * num;
}

console.log(multyply(3, 4)); 
console.log(greet("mohamed")); 
console.log(double(2));


const filterEvens = (numbers) => {
    return numbers.filter(num => num % 2 === 0);

}

console.log(filterEvens([1, 2, 3, 4, 5, 6]));