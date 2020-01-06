import Axios from "../Axios";

export async function getUsers() {
  try {
    return await Axios.get('/users');
  } catch (e) {
    throw new Error(e);
  }
}
