var user = {
    firstname : "dinesh",
    lastname : "kalaskar",
    logincount : 20,
    role: "admin",
    facebooksignedin : true,
    courselist : [],
    bycourse : function(coursename ) {
          this.courselist.push(coursename);
    },
    getcoursecount : ()=>
     {
        return `${this.firstname } is enrolled in total of ${this.courselist.length}`
    },
    info : function ( ){
     return `
      Role:       ${this.role}
      firstname:  ${this.firstname}
      lastname:   ${this.lastname}
      courselist: ${this.courselist}
      facebooksignedin: ${this.facebooksignedin}
      course enroll: ${this.courselist.length}` 
    }
};
//console.log(user); 
console.log(user.bycourse("react native"));
//console.log(user.getcoursecount());
console.log(user.courselist);
console.log(user.info());