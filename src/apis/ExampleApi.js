import Axios from "./Axios";


class ExampleApi{
    async getExample() {
      console.log("getExample");
      try {
          return await Axios.get('/exampleData')
      } catch (error) {
          throw error;
      }
    }

    async getTextWords(){
      console.log("getTextWords");
      try{
        return await Axios.get('/testText')
      } catch (error) {
        throw error;
      }
    }

}

export default new ExampleApi()
