/*
Primitive DataTypes 
    7 Types String, Boolean, Number, null, Undefined, Symbol, BigInt
JavaScript is a Dynamically typed language Because in js we can create variable without the 
type of variable  aka
*/ 
let a = 5 ; //here we don't have to declare that 5 is number datatype 
let b = 5.5 //this will also demonstrate as number type
let c = false ;// Boolean 
let d = "javed"; //String
let e = null; // null type
let f; // Undefined
let g = Symbol('123');
let h = Symbol('123');// here both g and h values are same still symbol will return it as a different datatype

let Big = 111222233344455566677777n; // here n is represent the Big as a BigInt 
//console.log(Big);
/*Reference (Non-Primitive) DataType
    Object,Array,Function
*/
//Array
let Hero = ["Mohammad","Javed","Gauri",""];
//console.log(Hero);

//Ojects
let Obj = {
    name :"Javed",
    age : 22, 
}
//console.log(Obj);

// Functions 
let myFun = function(){
    console.log("Hello ");
}
console.log(typeof(myFun));
console.log(typeof(Obj));
//console.log(typeof(e)); // Here e is assigned as null and here with typeof we identified null as object
//console.log(typeof(Hero)); // here Array is also find as Array Object 