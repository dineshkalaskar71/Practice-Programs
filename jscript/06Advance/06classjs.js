class User{
    constructor(name,mail)
    {
        this.name = name;
        this.mail = mail;
    }
    courselist = [];
    getinfo(){
        return { name: this.name,email: this.mail};
    }
}
t
module.exports = User;