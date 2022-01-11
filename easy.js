//Easy//
let Name1 = "Daniel";
let Name2 = "Peter";

let nmlenght1 = Name1.length
let nmlenght2 = Name2.length
if(nmlenght1>nmlenght2){
  var diffrence = "Longer";
} else{
var  diffrence="shorter";
}
console.log( " The name " + Name1 +" is " + diffrence +" than " + Name2 + `by${nmlenght1-nmlenght2}`)
