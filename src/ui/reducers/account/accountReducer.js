let defaultStateAccount = {
  isAuthenticated:false,
  username:''
}
export default function accountReducer(state = defaultStateAccount, action){
  switch (action.type) {
    case 'SIGN_UP':
      return {...state, username:action.username}
    default:
      return state
  }
}
