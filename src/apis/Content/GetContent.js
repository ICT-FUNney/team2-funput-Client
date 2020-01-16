import Axios from "../Axios";

export async function getContent(contentPath) {
  try {
    const ref = await Axios.get('/works');
    ref.data = Object.assign({},ref.data.b1018001.uploads[contentPath.contentPath]);
    return ref;
  } catch (e) {
    throw new Error(e);
  }
}
