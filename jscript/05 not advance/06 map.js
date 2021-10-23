


var mymap = new Map();
mymap.set(1,"A");
mymap.set(2,"B");
mymap.set(3,"C");
mymap.set(4,"D");

console.log(mymap);

// for(let key  of mymap.keys())            
// {
// console.log(`key is ${key}`);
// }

mymap.forEach((v,k)=>console.log(`${v} ${k}`))
