var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");
var follower = document.querySelector(".follower");
let d=document.querySelector(".hi");

console.log(followers);
setTimeout(() => {
    d.innerHTML = "its done";
  
},5612);


  follower.innerHTML = "follower on instagram";
let count = 1;
setInterval(  () =>{
    if (count <1000) { 
        count++;
    counter.innerText = count;
    }
},6);

setTimeout( ( ) => {
    followers.innerHTML = "followers on instagram";
},6500)
let a=20;
let m=()=>{
    console.log(a);
}
m();
console.log(`my rank is ${a} in compation`);
console.log("my rank is"+a );