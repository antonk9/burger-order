import axios from 'axios';
import configData from "../config.json";

export default class ProductsService {
    static async getAllProducts() {
        const response = await axios.get(`${configData.SERVER_URL}products`);

        return response
    }

    static async getProductById(id) {
        const response = await axios.get(`${configData.SERVER_URL}products/${id}`);

        return response
    }
}