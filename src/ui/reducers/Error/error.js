

export default function errorReducer(state = false, action){
  switch (action.type) {
    case 'true':
      return true
    case 'false':
      return false
    default:
      return state
  }
}
