var apps= ["facebook","whatapp","instagram","youtube"];

// for(const i of apps )
// { 
//     console.log(i);
// }

var symbol = {
    yt : "youtube",
    fb : "facebook",
    ins : "instagram"
}


for (const i in Symbol)
{
    console.log( `   key is ${n} and vaalue is ${symbol[i]}`);
}