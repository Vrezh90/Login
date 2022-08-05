import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "91ea4114-5b9a-493a-b560-f07077998c5b"
    },
    baseURL:' https://social-network.samuraijs.com/api/1.0/'
});

export const authApi =  {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password) {
        return instance.post(`auth/login`, {email, password});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}