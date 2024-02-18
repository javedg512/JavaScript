const mysym = Symbol("key1");
let obj={
    name : "Javed",
    age :12,
    email : "one@google.com",
    [mysym] : "One", // to access symbol we have to create brackets to get the type symbol otherwise it will show as String in typeof
    isLoggedIn : false,
    lastLogIn: ["Monday","Sunday"]
}
// console.log(obj.name);
// onsole.log(obj["email"]);
// console.log(typeof mysym);
obj.email = "Javed@javed.com"; //to changes in object elements
// Object.freeze(obj) //works like constant now we can't change anything in the object
// obj.email ="Javed ";
// console.log(obj);
obj.greeting = function(){
    console.log("Hello everyone!");
}
// console.log(obj.greeting());
obj.greeting1 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(obj.greeting1()
);
