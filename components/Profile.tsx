import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput , Image,TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import { userSlice } from "../store/Reducers/userSlice";
import { useTypeDispatch, useTypeSelector } from "./hooks/redux";
import { IUser } from "./templates/IUser";
import {  MainPageStyle } from "./styles/MainPage";
import { ProfileStyle } from "./styles/ProfileStyle";
import ProfileNavigate from "./UI/ProfileNavigate";
import ChangeInfoUser from "./UI/ChangeUserInfo";
import InfoUser from "./UI/InfoUser";
import { UpdateUser } from "../store/Reducers/ActionUser";
import { ApiConnection } from "../services/ApiConnect";
interface TemplateProfile {

  
}

const Profile : React.FC<TemplateProfile> = ()=> {
    const {user,access_token} = useTypeSelector(state => state.user)
    const [StateUser, SetStateUser] = useState<IUser>({id :user.id, town: user.town, name: user.name, email: user.email, password: user.password})
    const navigate = useNavigate();
    const dispatch = useTypeDispatch();
    
    const [ChangeUser,setChangeUser] = useState(false);
    const  LogOut = ()=> {
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        axios.post(`${ApiConnection}auth/logout`).then((e)=> console.log(e));
        dispatch(userSlice.actions.logout())
        navigate('/Login');
      }
      const Press = ()=>{
        if(ChangeUser)
        {
          setChangeUser(false);
          dispatch(UpdateUser(StateUser,access_token));
        }
        else {
          setChangeUser(true);
        }
      }
    return (<>
     <View style ={MainPageStyle.contentContainer}>
        <Text style = {ProfileStyle.h1}>My profile</Text>
        <View style = {ProfileStyle.MainContainer} >
          <View style = {ProfileStyle.FooterContainer}>
           <Text style ={{fontWeight:"600", fontSize: 18}}>Personal details</Text>
           <TouchableOpacity  onPress={()=> Press()}><Text  style = {{color : "#FA4A0C"}}>change</Text></TouchableOpacity>
          </View>
          {
            ChangeUser ? 
             <ChangeInfoUser user = {user} SetStateUser={SetStateUser} StateUser={StateUser}/>
             :
             <InfoUser user = {user}/>
           
          }
        </View>
        <TouchableOpacity onPress={()=> console.log('hi')} style ={ProfileStyle.NavigateContainer}>
         <Text style ={{fontWeight: "600", fontSize : 18,color: "black"}}>info</Text>
         <Image source={require('./image/Profile/ArrowLeft.png')}></Image>
       </TouchableOpacity>
       <TouchableOpacity style ={ProfileStyle.NavigateContainer}>
         <Text style ={{fontWeight: "600", fontSize : 18,color: "black"}}>Pending reviews</Text>
         <Image source={require('./image/Profile/ArrowLeft.png')}></Image>
       </TouchableOpacity>
       <TouchableOpacity style ={ProfileStyle.NavigateContainer}>
         <Text style ={{fontWeight: "600", fontSize : 18,color: "black"}}>Faq</Text>
         <Image source={require('./image/Profile/ArrowLeft.png')}></Image>
       </TouchableOpacity>
       <TouchableOpacity style ={ProfileStyle.NavigateContainer}>
         <Text style ={{fontWeight: "600", fontSize : 18,color: "black"}}>Help</Text>
         <Image source={require('./image/Profile/ArrowLeft.png')}></Image>
       </TouchableOpacity>
         
            

         </View>
    </>)
}
export default Profile;