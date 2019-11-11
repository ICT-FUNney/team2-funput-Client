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

    async createUser(){
      console.log("post");
      try {
        const res = await Axios.post('/user/',
          {
            name: 'Atta',
            job: 'Freelance Developer'
          });
        console.log(res.data);
        return res;
      } catch (err) {
        console.error(err);
      }
    }

    // async createUser(){
    //   console.log("delete");
    //   try {
    //     const res = await Axios.delete('/user/2');
    //     console.log(res.status);
    //     return res;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

}

export default new ExampleApi()
