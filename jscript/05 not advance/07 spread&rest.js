// ...args 

// function sum(a,b) {
//     return a+b;
// }
// var mysum = [2,4];
// console.log(sum(...mysum));//spread operator

function onowne(a,b,...args) {//Rest operator
    let add = a+b;
    var sum =0;  
    for(const arg of args)
         {
              
           sum = sum + arg;
         }
     return [sum,add];
}

console.log(onowne(2,5,1));
