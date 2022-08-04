import axios from 'axios';
import configData from "config.json";

export default class CategoriesService {
    static async getAllCategories() {
        const response = await axios.get(`${configData.SERVER_URL}categories`);

        return response
    }
}