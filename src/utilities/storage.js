function add(num1, num2){
   return num1 + num2;
}

function multiply(num1, num2){
   return num1 * num2;
}

const numbs = [34, 56, 78,92];
let sum = 0;
for (const num of numbs){
   sum = sum+num;
}

const reducer = (previous, current) => previous + current;
numbs.reduce(reducer, 0);


function substract(num1, num2){
   return num1 - num2;
}
export { add, multiply } 