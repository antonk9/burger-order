import axios from 'axios';
import configData from "config.json";

export default class AuthService {
    static async login(userData) {
        try {
            const response = await axios.post(`${configData.SERVER_URL}auth/login`, userData);
            localStorage.setItem("user", JSON.stringify(response.data));
            return response;
        } catch (e) {
            return e.response.data
        }
    }

    static logout() {
        localStorage.removeItem("user");
    }
    
    static async registration(userData) {
        const response = await axios.post(`${configData.SERVER_URL}auth/registration`, userData);

        return response;
    }

    static getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    static getUserRole() {
        return this.getCurrentUser()?.roles
    }
}