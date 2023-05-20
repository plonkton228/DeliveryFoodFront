import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View, Text, Button, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigate } from "react-router-native";
import { styleStart } from "./styles/StartStyle";

const StartComp : React.FC = ()=> {
    const navigate = useNavigate();
   const Touchable  = ()=> {
       navigate('/Login');
   }
    return(
        <>
       
       <View style = {styleStart.bodys}>    
        <View style = {styleStart.container} >
         <View style = {styleStart.flexcontainer}>
             <View style = {styleStart.ContainFlex}>
               <Image source={require('./image/Kep.png')}></Image>
               <Text style ={styleStart.TextStyleH1}>Food for Everyone</Text>
             </View>
                <Image source={require('./image/BackImage.png')} style = {styleStart.imageBack}></Image>
                <TouchableOpacity style = {styleStart.TouchStyle} onPress = {()=> Touchable() }>
                 <View style = {{width: "100%" , height : "100%" ,display : "flex", alignItems : "center", justifyContent : "center"}}>
                    <Text style = {styleStart.TextStyleBut}>Get starteed</Text>
                 </View>
                </TouchableOpacity>
         </View>      
        </View> 
       </View>
        </>
          
    )
}
export default StartComp;