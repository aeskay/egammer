import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  email:'',
  firstname:'',
  lastname:'',
  pass:''
}


export const userSlice = createSlice({
  
  name: 'user',
  initialState,

  reducers: {
    addUser(state, action){
        console.log(action.payload[0])
      return{
        ...state,
        email:action.payload[0],
        firstname:action.payload[1],
        lastname:action.payload[2],
        pass:action.payload[3]
      }
    },


  },
  
}); 

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
