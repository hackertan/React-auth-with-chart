

class Auth {
    constructor() {
        this.authenticated = false
    }
    login(username, password, cb) {
        console.log(username, password)
        if (1 == 1) {
            this.authenticated = true
            console.log("true")
        } else {
            console.log("false")    
        }
        cb()
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