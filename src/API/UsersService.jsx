import axios from 'axios';
import configData from "config.json";
import AuthService from "./AuthService";

export default class UsersService {
    static async getAllUsers() {
        const  { token } = AuthService.getCurrentUser();

        const response = await axios.get(
            `${configData.SERVER_URL}auth/users`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );

        return response
    }
}