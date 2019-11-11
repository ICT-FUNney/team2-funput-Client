import Axios from "../Axios";

export async function postWorks(){
  try{

    let ref = await Axios.get('/works');
    ref.data.b1018001.uploads.new = {
      work_title: 'architecture',
      file_url: 'urlの文字列が入る',
      description: 'レビュー'
    };
    return await Axios.post('/works',ref.data);
  }catch(e){
    throw new Error(e);
  }
}
