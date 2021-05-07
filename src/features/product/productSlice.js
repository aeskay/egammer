import {  createSlice } from '@reduxjs/toolkit';
import {data} from '../../assets/data';

const initialState = {
  products: data,
  cart: [],
  total:null
}


export const productSlice = createSlice({
  
  name: 'product',
  initialState,

  reducers: {
    addToCart(state, action){
      const cartItem = state.products.filter(item => item.id === action.payload);

      return{
        ...state,
        cart: state.cart.concat(cartItem),
      }
    },

    removeCart(state, action){
      
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      }
    },

    increaseCart(state, action){
      const cartItem = state.cart.find(item => item.id === action.payload);
      const number = cartItem.inCart+1;
           
      return { 
        ...state, 
        cart: state.cart.map(item => item.id === cartItem.id ? {...item, inCart: number}: item
        ),
     }
    },

    decreaseCart(state, action){
      const cartItem = state.cart.find(item => item.id === action.payload);
      const numberRed = cartItem.inCart-1

      return { 
        ...state, 
        cart: state.cart.map(item => item.id === cartItem.id ? {...item, inCart: numberRed}
        : item
        ),
     }
    },
    calcTotal(state, action){
      const totalArr = [];

      for(var i =0; i<state.cart.length; i++){
        const itemPrice = state.cart[i].inCart * state.cart[i].price;
        totalArr.push(itemPrice)
      }

      const totalRed = totalArr.reduce((a, b) => a + b, 0)
      return {
        ...state,
        total:totalRed
      }
    },
    resetCart(state){
      return{
        ...state,
        cart:[],
        total:null
      }
    }
  },
  
  
}); 

export const { addToCart, removeCart, increaseCart, decreaseCart, resetCart, calcTotal } = productSlice.actions;

export default productSlice.reducer;
