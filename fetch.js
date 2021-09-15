// 1.Json

const student = {
    name: 'sakib',
    age: 18,
    movies: ["king", "khan"],
};

const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2.fetch
// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data))

// 3.keys, value
const keys = Object.keys(student);
const value = Object.values(student);

// console.log(keys)
// console.log(value)


// for
const numbers = [2, 4, 6, 78, 89, 11]
numbers.forEach(number => console.log(number));
const mapping = numbers.map(num => num * 2);
// console.log(mapping)


// add or remove from an array
const products = [
    { name: 'laptop', price: 200, brand: 'HP', color: 'silver' },
    { name: 'PC', price: 300, brand: 'xps', color: 'black' },
    { name: 'workstation', price: 320, brand: 'walton', color: 'ash' },
    { name: 'desktop', price: 1200, brand: 'lenevo', color: 'orange' },
    { name: 'laptop', price: 2200, brand: 'dell', color: 'silver' }
]

const newProduct = { name: 'webcam', price: 1200, brand: 'hw', color: 'orange' };
const newItem = [...products, newProduct];
// console.log(newItem);

// creat a new array removing item
const remaining = products.filter(item => item.name !== "PC");
// console.log(remaining)


