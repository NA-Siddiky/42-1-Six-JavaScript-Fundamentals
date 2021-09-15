const numbers = [4, 5, 67, 9, 90, 1];

const student = {
    name: 'sakib',
    age: 18,
    movies: ["king", "khan"],
};

const about = `my name is ${student.name} age of ${student.age} number is ${numbers[2]}  and also like ${student.movies[0]}`;

// console.log(about);


// arrow function
const getReturn = () => 55;
const adding = num => num + 5;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const multiline = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. spreed operator
const newNumbers = [...numbers, 321]
// numbers.push(33);
// numbers.push(22);
// console.log(numbers);
console.log(newNumbers);
