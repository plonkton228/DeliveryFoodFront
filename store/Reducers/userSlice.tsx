import { createSlice,PayloadAction,createReducer, createAction } from '@reduxjs/toolkit'
import { IUser } from '../../components/templates/IUser'
import { FlipInYLeft } from 'react-native-reanimated'


export interface TemplateState {
    user : IUser,
    isLoading: boolean,
    isAuth : boolean,
    errors : string,
    access_token: string,
}
const obj : IUser = {
    id: 0,
    name: '',
    email: '',
    password: '',
    town: '',
  
}
const initialState : TemplateState = {
 
    user : obj,
    isLoading: false,
    isAuth : false,
    errors : "",
    access_token: "",
}

export const userSlice = createSlice({
    initialState : initialState,
    name : 'user',
    reducers :{
        pinned(state){
            state.isLoading = true;
            
        },
        fullfield(state,action: PayloadAction<TemplateState>){
              state.isLoading = false;
              state.isAuth = true;
              state.user = action.payload.user
              state.access_token = action.payload.access_token
        },

        reject(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.errors = action.payload;
        
        },
        logout (state){
            state.isAuth = false;
            state.user = obj;
            state.access_token = "";
        },
        update(state,action : PayloadAction<IUser>){
            state.user = {...state.user, ...action.payload};
        }
    }
})
// ,