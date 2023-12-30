const name = "Javed";
const vari = 22;
// console.log(`My name is ${name} and my age is ${vari}`);
const naam = new String("Javed Gauri");// Second type to declare String 
//console.log(naam[1]);
//console.log(naam);

//console.log(naam.length);
//console.log(naam.toUpperCase()); //toLowerCase() to lower case the string variable
//console.log(naam.charAt(2));// To find the character or string at ___ position
//console.log(naam.indexOf("J")); // to find the index of the string character 
const jaam = naam.substring(0,5); //in substring from 0 to 5 string charcater will be displayed it will not accept negative values

const baam = naam.slice(0,5) //It is same as substring but it also accept negative values also 

//console.log(baam);
//console.log(jaam)

// const vaam ="        Javed          ";
// console.log(vaam);
// console.log(vaam.trim());// trim will remove the unnecessary spaces around strings 

const vaaa = "www.javedgauri.com/javed%20gauri";
console.log(vaaa.replace('%20','-'));// as its name it replace the string char with our value 
console.log(vaaa.includes('jaaaa'));// this include search the value that it is here or not 
