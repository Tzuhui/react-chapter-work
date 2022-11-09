import  { createContext } from 'react';
export const ParentContext = createContext();

export const initState = {
  cartList: [],
  total: 0,
}

export const cartReducer = (state, action) => {
  let newCartList =  [...state.cartList];
  const index = state.cartList.findIndex(item => item.id === action.payload.id)
  switch (action.type) {
    case 'ADD_TO_CART':
      if (index > -1) {
        newCartList[index].qty += 1;
      } else {
        newCartList.push(action.payload)
      }
      return {
        ...state,
        cartList: newCartList,
        total: state.total + action.payload.price
      }
    case 'CHANGE_CART_QTY':
      newCartList[index].qty = parseInt(action.payload.qty);
      const totalPrice = newCartList.map(c => c.price * c.qty).reduce((previous, current) => previous + current);
      return {
        ...state,
        cartList: newCartList,
        total: totalPrice
      }
    default:
      return state
  }
}