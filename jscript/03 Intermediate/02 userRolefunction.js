// define a function that can answer the role of user
// a user can be on the following roles

// admin : gets full access 
// subadmin : get access to create and delete courses
// testprep :  get access to create and delete test
// user : get access to custome content 
//other : trail user

// input : getuserRole(name,role)

var getuserRole = function (name,role)
{
    switch (role) 
    {
        case "admin": 
             return `${name}gets full access `;
            
         //   break;
        case "subadmin":  
            return `${name}get access to create and delete courses `;
           
           //break;
        case "testprep": 
           return `${name}get access to create and delete test `;
          
          //break;
          case "user": 
          return `${name}get access to custome content  `;
         
         //break;
        default:
            return `${name}trail user`;
           // break;
    }
}
console.log(getuserRole("dinesh","subadmin"));

var getrole = getuserRole("sammy","user");
console.log(getrole);                            