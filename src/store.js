import  { createContext } from 'react';
export const ParentContext = createContext();

export const initState = {
  cartList: [],
  total: 0,
}

export const cartReducer = (state, action) => {
  // 判斷指令
  switch (action.type) {
    case 'ADD_TO_CART':
      let newArray =  [...state.cartList];
      newArray.push(action.payload)
      return {
        ...state,
        cartList: newArray,
        total: state.total + action.payload.price
      }
    default:
      return state
  }
}