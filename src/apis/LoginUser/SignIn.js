import axios from "axios";

export async function signIn(data) {
  try {
    return await axios.post(`https://funfintech.tk/api/v2/signin`, {
      id: data.id, password: data.password
    });
  } catch (error) {
    throw new Error(error);
  }
}
