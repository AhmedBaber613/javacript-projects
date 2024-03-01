//arrow function
const greet = () => 'hello, world';
greet();

const result = greet();

console.log(result);

//traditional function
const Greet = function() {
    return 'Hello, world';
}

Greet();
const Result = Greet();
console.log(Result);