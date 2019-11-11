import Axios from "./Axios";


class ExampleApi {
    async getExample() {
        try {
            return await Axios.get('/exampleData')
        } catch (error) {
            throw error;
        }
    }
}

export default new ExampleApi();