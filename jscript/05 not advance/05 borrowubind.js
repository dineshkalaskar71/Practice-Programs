const rj= {
    first : "dinesh",
    last :  " kalaskar",
    coursecount : 4,
    getinfo :function(){
       console.log( `firstname is ${this.first}
        lasyname is ${this.last}
        coursecount is ${this.coursecount}`);
    },
};

const dj= {
    first : "omkar",
    last :  " khodade",
    coursecount : 4,
};

// rj.getinfo.bind(dj)();
rj.getinfo.call(dj);