let defaultStateAccount = {
  isAuthenticated:false,
  username:''
}
export default function accountReducer(state = defaultStateAccount, action){
  switch (action.type) {
    case 'SIGN_UP':
      return {...state, username:action.username, isAuthenticated:true}
    case 'LOG_OUT':
      return {...state, isAuthenticated:false}
    default:
      return state
  }
}
