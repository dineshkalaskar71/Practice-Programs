var iseven = (element) =>
{
    if(element%2===0)
    {
        return true;
    }
  //  return false;
 //return element%2===0;
}
// var result = [2,4,6,8].every(iseven);
// console.log(result);

var result = [2,3,6,8].every((e) => e%2===0);
//console.log(result);

var ans = [1,3,5,4].every( (a) => (a<5));
//console.log(ans);

let i=[2,6,4].every((e)=>{ return e%2==0});
console.log(i);