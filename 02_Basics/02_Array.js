let marvels = ["This", "is","some"];
let dc = ["thing","i","Want"];
// marvels.push(dc) // push adds up the elements in the existing array
// let all = marvels.concat(dc); //and concat create a new array for the elements
let all = [...marvels,...dc] //... spread out values 
//console.log(all);

let arr =  [1,2,3,[4,5,6],[7,8,[9,0]]];
let brr = arr.flat(3);// it convert multidimensinal array to single dimensional array
//console.log(brr);
let one = 22;
let two = 12;
let three = 33;
console.log(Array.of(one,two,three));
