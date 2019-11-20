import Axios from "../Axios";

export async function firstLoadWorks(){
  try{
    return await Axios.get('/works');
  }catch(e){
    throw new Error(e);
  }
}
