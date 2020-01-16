import Axios from "../Axios";

export async function getWorks() {
  try {
    return await Axios.get('/works');
  } catch (e) {
    throw new Error(e);
  }
}
