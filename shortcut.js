let myVar = 5;
if (myVar) {
    myVar = myVar * 100
}
else {
    myVar = 0
}
// console.log(myVar)

const money = 80;
let food = money > 100 ? "borany" : "cha-biskut";
// console.log(food);

const num1 = 43;
const numStr = num1 + "";
// console.log(numStr);

const num2 = "34"
const inputNum = +num2;
// console.log(inputNum);

let isActive = false;
const showUser = () => console.log("show");
const hideUser = () => console.log("hide");
// isActive ? showUser() : hideUser();
// isActive && showUser()
// isActive || hideUser();

isActive = !isActive;
console.log(isActive);

