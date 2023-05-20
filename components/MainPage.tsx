import { createDrawerNavigator } from "@react-navigation/drawer";
import axios from "axios";
import React from "react";
import { View,  Animated} from "react-native";
import { useNavigate } from "react-router-native";
import { userSlice } from "../store/Reducers/userSlice";
import { useTypeDispatch, useTypeSelector } from "./hooks/redux";
import {  MainPageStyle, MenuStyle } from "./styles/MainPage";
import {useState, useRef} from 'react'
import Order from "./Order";
import Profile from "./Profile";
import Offers from "./home";
import Privacy from "./Privacy";
import Security from "./Security";
import { PageSettingsTemplate } from "./templates/ISettingsPage";
import MenuContent from "./UI/MenuContent";
import HeaderComponent from "./UI/HeaderComponent";
import FooterComponent from "./UI/FooterComponent";
import { ApiConnection } from "../services/ApiConnect";
const MainPage : React.FC = ()=> {
    const Drawer = createDrawerNavigator();
    const navigate = useNavigate();
    const dispatch = useTypeDispatch();
    const {user,access_token} = useTypeSelector(state => state.user);
    const [pageSetting , setPageSetting] = useState<PageSettingsTemplate>({focus: '', page : 'home', showMenu : true});
    const scaleValue = useRef(new Animated.Value(1)).current;
    const translateValue = useRef(new Animated.Value(1)).current;
    const  LogOut =  ()=> {
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        axios.post(`${ApiConnection}auth/logout`).then((e)=> {
          dispatch(userSlice.actions.logout())
          navigate('/Login');
        });
        
        
      }

    const AnimateMenu =()=> {
        Animated.timing(scaleValue, {
            toValue: pageSetting.showMenu ? 0.88 : 1,
            duration: 300,
            useNativeDriver: true
          }).start();
        Animated.timing(translateValue, {
            toValue: pageSetting.showMenu ? 230 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();

        setPageSetting({...pageSetting, showMenu: !pageSetting.showMenu});
    }
    return (
        <>

        <View style ={MenuStyle.MainContainer}>
            <Animated.View style ={{...MainPageStyle.MainContainer, transform : [{scale : scaleValue}, {translateX : translateValue}], borderRadius : pageSetting.showMenu ? 0 : 20  } }>
                 <HeaderComponent AnimateMenu={AnimateMenu}/>
               {pageSetting.page == 'profile' ? <Profile/> : pageSetting.page == 'orders' ? <Order/> : pageSetting.page == 'home' ? <Offers/> : pageSetting.page == 'privacy' ? <Privacy/> :<Security/> }
               
                 <FooterComponent setPageSetting={setPageSetting} pageSetting = {pageSetting}/>
            </Animated.View>
             <MenuContent setPageSetting={setPageSetting} pageSetting ={pageSetting} LogOut = {LogOut}/>
        </View>
        </>
    )
}
export default MainPage