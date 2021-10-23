// show user signout button if he is authenticated 
// otherwise show him option login or signup

var authenticated = true;

if (authenticated)
{
    console.log("show signouut button");
}else
{
    console.log("show login button");

}

authenticated ? console.log("show signouut butto") : console.log("login/signup");