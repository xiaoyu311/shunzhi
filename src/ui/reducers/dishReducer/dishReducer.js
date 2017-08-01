let dishes = {
  all:{},
  cart:[]
}
export default function dishReducer(state = dishes, action) {
  switch (action.type) {
    case 'LOAD_DISH':
      return {...state, all:action.dishes}
    case 'ADD_CART':
      return {...state, cart:[...state.cart, action.cartItem]}
    case 'REVISE_CART':
      return {...state, cart:action.cartItem}
    default:
      return state
  }
}
