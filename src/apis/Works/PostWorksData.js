import Axios from "../Axios";

export async function postWorksData(works){
  console.log(works);
  const dayData = new Date();
  const year = dayData.getFullYear();
  const month = dayData.getMonth();
  const date = dayData.getDate();
  const hours = dayData.getHours();
  const minutes = dayData.getMinutes();
  const seconds = dayData.getSeconds();
  const dayInf = ""+year+month+date+hours+minutes+seconds;
  try{
    const ref = await Axios.get('/works');
    const ref2 = {
      [""+ dayInf] : {
        work_title:works.work_title,
        file_url: works.file_url,
        description: works.description
      }
    };
      ref.data.b1018001.uploads = Object.assign({}, ref.data.b1018001.uploads,ref2);
    return await Axios.post('/works',ref.data);
  }catch(e){
    throw new Error(e);
  }
}
