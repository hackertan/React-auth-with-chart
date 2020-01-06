

class Auth {
    
    check(username, password){
        var result = false
        this.users.forEach(user => {
            if(user.username==username && user.password==password){
                result = true
            } 
        });
        return result
    }
    constructor() {
        this.authenticated = false
        this.users = [{
            username: "user",
            password: "password"
        },
        {
            username: "sk",
            password: "sk"
        }
        ]
    }
    login(username, password) {
        // console.log(username, password)
        var result = false
        if (this.check(username.trim(),password.trim())) {
            this.authenticated = true
            console.log("true")
            result = true
        } else {
            console.log("false")
        }
        return result
    }
    logout(cb) {
        this.authenticated = false
        cb()
    }
    isAuthenticated() {
        return this.authenticated
    }

}

export default new Auth()