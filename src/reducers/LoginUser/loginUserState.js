const sendUserData = (id, token)=> {
  sessionStorage['id'] = id;
  sessionStorage['token'] = token;
}
const getId = sessionStorage.getItem('id');
const getToken = sessionStorage.getItem('token');


const initState = (getId && getToken) ?  {
  id: getId,
  token: getToken,
  snackbar: false
} : {
  id: '',
  token: '',
  snackbar: false
};

export default function loginUserState(state = initState, action) {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      sendUserData(action.data.id, action.token);
      const getId = sessionStorage.getItem('id');
      const getToken = sessionStorage.getItem('token');
      return {
        ...state,
        id: action.data.id,
        token: action.token,
      };
    case 'SIGN_UP_SUCCESS':
      sendUserData(action.data.id, action.token);
      return {
        ...state,
        id: action.data.id,
        token: action.token,
      };
    case 'UPDATE_TOKEN':
      sendUserData(state.id, action.token);
      return {
        ...state,
        token: action.token
      };
    case 'SNACKBAR_OPEN':
      return {
        ...state,
        snackbar: true
      };
    case 'SNACKBAR_CLOSE':
      return {
        ...state,
        snackbar: false
      };
    case 'SIGN_OUT':
      sendUserData('', '');
      return {
        ...state,
        id: '',
      };
    default:
      return state;
  }
}
