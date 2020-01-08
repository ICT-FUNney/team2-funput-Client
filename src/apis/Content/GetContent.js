import Axios from "../Axios";

export async function getContent(contentPath) {
  // console.log(contentPath.contentPath);
  const path = '/works/b1018001/uploads';
  try {
    console.log(contentPath);
    // const data = await Axios.get(path);
    // const ref = await Axios.get(path);
    // console.log('axios'+data);
    console.log("axios:start");
    const ref = await Axios.get('/works');
    console.log(contentPath.contentPath);
    const ref2 = ref.data.b1018001.uploads[contentPath.contentPath];
    console.log(ref2);
    console.log("axios:end");
    ref.data = Object.assign({},ref.data.b1018001.uploads[contentPath.contentPath]);
    console.log(ref);
    return ref;
  } catch (e) {
    throw new Error(e);
  }
}
