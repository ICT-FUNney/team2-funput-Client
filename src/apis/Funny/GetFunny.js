import axios from 'axios';

export async function getFunny(id, token) {
  try {
    return await axios.post(`https://funfintech.tk/api/v2/balance`, { id }, {
      headers: {
        authorization: token
      }
    });
  } catch (error) {
    if (error.status === 400) {
      alert('宛先が無効です。もう一度確認してください。');
    } else if (error.status === 401) {
      alert('トークンの有効期限が切れました。再ログインお願いします。');
      window.location.reload();
    } else {
      alert('通信に失敗しました。通信環境を確認してください。');
    }
    throw new Error(error);
  }
}