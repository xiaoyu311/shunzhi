let defaultStateErr = {
  error:false,
  msg:''
}

export default function errorReducer(state = defaultStateErr, action){
  switch (action.type) {
    case 'SHOW_ALERT':
      return {...state,error:true, msg:action.msg}
    case 'HIDE_ALERT':
      return {...state, error:false}
    default:
      return state
  }
}
