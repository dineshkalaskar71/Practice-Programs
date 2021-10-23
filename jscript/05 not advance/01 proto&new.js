 var User = function (firstname,coursecount)  {
     this.firstname = firstname,
     this.coursecount = this.coursecount,
     this.getcoursecount = function (){
         console.log(`coursecount is ${this.coursecount}` );
     };
     
 };

 User.prototype.getfirstname = function (){

    console.log(`your firstname ${this.firstname}`);
 }

 var me = new User("dinesh",2);
 console.log(me);
 var my = new User("omkar",2);
 console.log(my);
//  me.getfirstname();