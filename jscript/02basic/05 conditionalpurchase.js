// user is only allowe to make purchase when he is :
// logged in
// email verification
// card info - Valid


var loggedin = true;
var emaliverified = true;
var cardinfo = true;

if(loggedin && emaliverified && cardinfo)
{
    console.log("allow user to make purchase ");
} 
else
{
    console.log("not allow to do purchase");
}

