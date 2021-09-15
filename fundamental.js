// 1.variable declare
const name = 'testName';
let myName = 'myName1';
myName = "myName2";

//2. 6 basic condition: >,<myName, ===,!==,<=,>=;
// multiple condition: &&,||

if (name == 'testName' || myName == 'myName1') {
    console.log(name)
}
else if (name === testName) {
    console.log(name)
}
else {
    console.log(name)
}

// 3.array declare
// index, push

const numbers = [4, 5, 67, 9, 90, 1];
numbers[0] = 55;

// 4.for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5.function

function add(num1, num2) {
    const result = num1 + num2
    return result;
}
const output = add(4, 5);


// 6.object
const student = {
    name: 'sakib',
    age: 18,
    movies: ["king", "khan"],
}
const myVariable = "age";
console.log(student.name);
console.log(student['name']);
console.log(student[myVariable]);