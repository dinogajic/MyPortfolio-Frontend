import axios from 'axios'
import $router from "@/router"


let Service = axios.create({
    baseURL: 'https://my-portfolio-wa.herokuapp.com/',
    timeout: 1000,
    
})

let errorMsg = "";

axios.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

axios.interceptors.response.use((response) => response, (error) => {
    if(error.response.status == 401 || error.response.status == 403 ) {
        Auth.logout();
        $router.go();
    }
});


let Auth = {
    async login(email, password) {
        
        let response = await Service.post("/auth", {
            email: email,
            password: password,
        })

        if(response.data.status == "Auth error" && response.data.status == 401) {
            return false
        }
        else 
        {
            let user = response.data;
            localStorage.setItem('user', JSON.stringify(user));
            return true;
        }      
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

export { Auth, errorMsg };