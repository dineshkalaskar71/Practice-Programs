let change=document.querySelector(".code");
let ch = document.querySelector(".ff");



let c=1;
setInterval(()=>
{
   
    if(c<10000)
    {
        c++;
      ch.innerHTML=c;  
    }
},6);

setTimeout( ()=>{

change.innerText="good going";    
}
,3566);
console.log("hii");