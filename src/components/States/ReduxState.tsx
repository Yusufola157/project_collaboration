import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface User{
    _id:string,
    name:string,
    email:string,
    password:string,
}
interface Transfer{
  accountNumber:number,
  amount:number,
}
const initialState={
    currentUser:{} as User,
    currentAccount:{} as Transfer,
}
const ReduxState= createSlice({
    name:"pigy",
    initialState,
    reducers:{
      LoginUser:(state,{payload}:PayloadAction<User>)=>{
        state.currentUser=payload
      },
      PayMent:(state,{payload}:PayloadAction<Transfer>)=>{
        state.currentAccount=payload
      }
    }
})
export const {LoginUser,PayMent} = ReduxState.actions
export default ReduxState.reducer