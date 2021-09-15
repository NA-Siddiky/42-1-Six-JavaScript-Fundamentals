const products = [
    { name: 'laptop', price: 200, brand: 'HP', color: 'silver' },
    { name: 'PC', price: 300, brand: 'xps', color: 'black' },
    { name: 'workstation', price: 320, brand: 'walton', color: 'ash' },
    { name: 'desktop', price: 1200, brand: 'lenevo', color: 'orange' },
    { name: 'laptop', price: 2200, brand: 'dell', color: 'silver' }
]

const brands = products.map(product => product.brand);
// console.log(brands)
const price = products.map(product => product.price);
// console.log(price)

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

let total = 0;
products.forEach(product => {
    total = total + product.price
})
console.log(total);

// 3. filter
const chep = products.filter(product => product.price <= 1000);
// console.log(chep);

const specificName = products.filter(product => product.name.includes('l'));
// console.log(specificName);

// 4.find

const special = products.find(p => p.name.includes('l'));
// console.log(special);