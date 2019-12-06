import axios from "axios";

export async function signUp(data) {
  try {
    return await axios.post(`https://funfintech.tk/api/v2/signin`, {
      id: data.id, password: data.password
    });
  } catch (error) {
    if (error.status !== 400) {
      alert('通信に失敗しました。通信環境を確認してください。');
    }
    throw new Error(error);
  }
}
