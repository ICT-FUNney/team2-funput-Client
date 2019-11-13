import Axios from "../Axios";

export async function postWorksData(works){
  try{
    const ref = await Axios.get('/works');
    ref.data.b1018001.uploads.new = {
      work_title:works.work_title,
      file_url: works.file_url,
      description: works.description
    };
    return await Axios.post('/works',ref.data);
  }catch(e){
    throw new Error(e);
  }
}
