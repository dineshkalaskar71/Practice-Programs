// allow user to acces content if :

// logged in from emali
// logged in from google
// logged in from facebook

var email = false;
var google = true;
var facebook = true;

if (email)
{
    console.log("logged in succesfull from email");
}


if (google)
{
    console.log("logged in succesfull from google");
}

if (facebook)
{
    console.log("logged in succesfull from facebook");
}

if(email || google || facebook)
{
    console.log("login succesfull");
}




