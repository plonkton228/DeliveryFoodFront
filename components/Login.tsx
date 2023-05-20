import {  Image, View, Button,Text } from "react-native";
import React from "react";
import { useNavigate } from "react-router-native";
import { stylesL } from "./styles/LogStyle";
import {useState} from 'react'
import RegComponent from "./UI/RegComponent";
import PressComponent from "./UI/PressComponent";
import { useTypeDispatch, useTypeSelector } from "./hooks/redux";
import { ILog } from "./templates/ILog";
import { RegUser, SomeDo } from "../store/Reducers/ActionUser";
import { IReg } from "./templates/IReg";
import axios from "axios";



 const Login : React.FC = ()=> {
    const navigate = useNavigate();
    const [userLog, setUserLog] = useState({email :"", password : ""})
    const [userReg, setUserReg] = useState({email :"", password : "", town: "Moscow", name : ""})
    const [LogReg, setLogReg] = useState({Log : true, Reg : false})
    const [test , setTest] = useState("");
    const {user,isLoading,errors} = useTypeSelector(state => state.user)
    const dispatch = useTypeDispatch();
    const Towns = [{label : "Moscow", value : "Moscow"}, {label: "Saint Petersburg", value : "Saint Petersburg" }, {label: "Togliatty", value : "Togliatty" }]
    const Back = () => {

        navigate('/')
    }
    const PressLog = ()=> {
       setLogReg({Log: true, Reg : false})
    }

    const PressReg = ()=> {
        setLogReg({Log: false, Reg : true})
    }

    const LogIn =  (userLog: ILog)=> {
        if(userLog.email !=""  && userLog.password != "")
        {
            dispatch(SomeDo(userLog,navigate))
        }
        else {
            alert("Введите все поля!")
        }
    
     
       
    }

    const RegIn = (userReg : IReg)=> {
        if(userReg.email.includes("@") && userReg.email.length > 5)
        {
            if(userReg.email !="" && userReg.name !="" && userReg.password != "")
            {
                dispatch(RegUser(userReg,navigate));
            }
            else {
                alert("Введите все поля!")
            }
            
        }
        else {
            alert("Введите корректную почту");
        }
   
     
    }
     
    return (
        <>
        
      
        
         <View style = {stylesL.container}>
            <View style = {stylesL.head}>
               <Image source={require('./image/Povar.png')} style ={{alignSelf: "center"}}></Image>
               <PressComponent PressLog={PressLog} PressReg = {PressReg}/>
            </View>
            <RegComponent RegIn={RegIn} userLog={userLog} userReg = {userReg} setUserLog = {setUserLog}  setUserReg = {setUserReg} setLogReg = {setLogReg} LogReg = {LogReg} Towns = {Towns} LogIn = {LogIn}/>
         </View>
        </>
    )
}
export default Login;