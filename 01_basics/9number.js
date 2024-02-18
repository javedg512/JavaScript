const score = 300; // First type to assign a variable 
// console.log(score);

const balance = new Number(100); // Second type to assign a variable but it return a diffrent form in console 
// console.log(balance);
// console.log(balance.toString); // return a string precision
// console.log(balance.toFixed(2)); // Provide 100.00 to the end
const other = 123.806;
//console.log(other.toPrecision(3));// to precision work like ceiling and floor of js it convert the number to overall stuff and return as (int) inputted value 

const hunderd = 1000000;
//console.log(hunderd.toLocaleString('en-IN'));// it return the variablr in more readable form  


//*************************************************** Math********************************************************** */

console.log(Math);   //Math is a object type function
console.log(Math.abs(-4));
console.log(Math.random());
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));