import Axios from "../Axios";

export async function postWorks() {
  try {
    const ref = await Axios.get('/works');
    ref.data.b1018001.uploads.new = {
      work_title: 'architecturffsdgdsew',
      file_url: 'urlの文字列がdfgsff',
      description: 'dsdfds'
    };
    return await Axios.post('/works', ref.data);
  } catch (e) {
    throw new Error(e);
  }
}
