// create an application with the following roles:
// admin : gets full access 
// subadmin : get access to create and delete courses
// testprep :  get access to create and delete test
// user : get access to custome content 

var user = "user";

switch (user) {
    case "admin":
        console.log("gets full access");
        
        break;
    case "subadmin":
            console.log("gets full get access to create and delete courses");
            
            break;
   case "testprep":
                console.log(" get access to create and delete test ");
                
                break;
   case "user":
                    console.log("get access to custome content ");
                    
                    break;
                            
    default:
         console.log("invalid user");

        break;
}