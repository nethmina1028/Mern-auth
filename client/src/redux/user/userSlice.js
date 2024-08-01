import { createSlice } from "@reduxjs/toolkit";  //1


 const initialState = {         //2
       currentUser:null,
       loading:false,
       error:false,
 };



const userSlice = createSlice({   //3
        name:'user',
        initialState,
        reducers:{
             signInStart:(state) =>{
                    state.loading = true;
             },
                signInSuccess:(state,action) =>{
                       
                        state.currentUser = action.payload;
                        state.loading = false;
                        state.error = false;

                },
                signInFailure:(state,action) =>{
                        state.loading = false;
                        state.error = action.payload;
                }
        }
});

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions; //4

export default userSlice.reducer;  //5