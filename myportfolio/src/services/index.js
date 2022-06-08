import axios from 'axios'
import $router from "@/router"

let Service = axios.create({
    baseURL: 'https://my-portfolio-wa.herokuapp.com',
    timeout: 1000,
})

/* Service.interceptors.request.use((request) => {

    let token = Auth.getToken()
    if (!token) {
        $router.go();
        return
    }
    else {
        request.headers["Authorization"] = "Bearer " + token;
    }

    return request
})
 */
let Auth = {
    async login(email, password) {
        let response = await Service.post("/auth", {
            email: email,
            password: password,
        });

        let user = response.data;

        localStorage.setItem('user', JSON.stringify(user));

        return true;
    },
    logout() {
        localStorage.removeItem("user");
    },
    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    },
    getToken(){
        let user = Auth.getUser();
        if (user && user.token) {
            return user.token
        }
        else return false
    },
    authenticated() {
        let user = Auth.getUser()
        if(user && user.token) {
            return true
        }
        return false
    },
    state: {
        get authenticated() {
            return Auth.authenticated();
        }
    }
}

export { Auth };