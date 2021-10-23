// const music = document.getElementsByTagName("audio");
// const play = document.getElementById("#play");
// const img = document.querySelector(".im");
// play.addEventListener('click',()=>{
//     music.play();
//     play.classList.replace("fa-play","fa-pause");
//     img.classList.add("anime")
// });
// document.write("hi");
// const f=document.getElementById("#title");
// setTimeout(()=>{
//     f.innerHTML="hehe";
// },2222)


const audio=document.querySelector(".audio");
const p= document.getElementById("#back");
const run= document.getElementById("#play");
const n= document.getElementById("#next'");

run.addEventListener('click',()=>{
    audio.play();
    run.classList.replace("fa-play","fa-pause");
    im.classList.add("anime");
});