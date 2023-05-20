import React from "react";
import {  Pressable, Text,  View,  } from "react-native";
import { stylesL } from "../styles/LogStyle";
interface PressTemplate {
    PressLog : ()=>void,
    PressReg : ()=>void,
}



const PressComponent : React.FC<PressTemplate> = (props)=> {
    return(
        <View style = {stylesL.containerInner}>
        <Pressable onPress={props.PressLog}   style = {({pressed})=> [{backgroundColor: pressed
        ? '#FA4A0C'
        : 'white'}]}>
         <Text style = {stylesL.textstyle}>Login</Text>
        </Pressable>
        <Pressable onPress={props.PressReg} style = {({pressed})=> [{backgroundColor: pressed
        ? '#FA4A0C'
        : 'white'}]} >
          <Text style = {stylesL.textstyle}>Sign-up</Text>
         </Pressable>
        </View>
            
    )
}
export default PressComponent