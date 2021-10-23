var myarray = [2,3,4,5,6,7,8];
console.log(myarray.fill(1,1,5));

const mynum = [22,34,54,83,48];

const result = mynum.filter( (num) => (num <54));

console.log(result);

let g=[2,4];
let h=g.every((e)=>(e%2==0));
console.log(h);