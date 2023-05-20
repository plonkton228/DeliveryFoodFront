import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { DispatchState } from '..';
import { ILog } from '../../components/templates/ILog';
import { IReg } from '../../components/templates/IReg';
import { IUser } from '../../components/templates/IUser'
import { TemplateState, userSlice } from './userSlice';
import { NavigateFunction } from 'react-router-native';
import { ApiConnection } from '../../services/ApiConnect';



export function SomeDo(log : ILog = {email : "", password: ""}, navigate : NavigateFunction){
    
    return async(dispatch : DispatchState)=> {
        try {
            dispatch(userSlice.actions.pinned());
            const respone = await axios.post<TemplateState>(`${ApiConnection}auth/login`,{email: log.email, password: log.password});
            console.log(respone.data.access_token);
            dispatch(userSlice.actions.fullfield(respone.data))
            navigate('/')
        } catch (error) {
            dispatch(userSlice.actions.reject(String(error)))
        }
    }
}


export function RegUser(reg : IReg = {email : "", password: "", town : "", name : ""},navigate : NavigateFunction) {
    return async (dispatch : DispatchState) => {
          try {
            dispatch(userSlice.actions.pinned());
            const response = await axios.post<TemplateState>(`${ApiConnection}auth/register`, {email : reg.email, password: reg.password, town : reg.town, name : reg.name});
            dispatch(userSlice.actions.fullfield(response.data))
            navigate('/')
          } catch (error) {
            dispatch(userSlice.actions.reject(String(error)))
          }
    }
}
   
export function UpdateUser (user: IUser,access_token: string)
{
   return async (dispatch : DispatchState) => {
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
            const response = await axios.post<IUser>(`${ApiConnection}auth/uPdate`, {email : user.email, town : user.town, id: user.id, name : user.name})
            dispatch(userSlice.actions.update(response.data));
        }
        catch(error)
        {
            dispatch(userSlice.actions.reject(String(error)))
        }
   }
}