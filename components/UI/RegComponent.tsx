import React from "react";
import { TouchableOpacity, Image, Pressable, Text, TextInput, View, Button } from "react-native";
import { ILog } from "../templates/ILog";
import { ILogReg } from "../templates/ILogReg";
import { IReg } from "../templates/IReg";
import { stylesL } from "../styles/LogStyle";
import {Picker} from '@react-native-picker/picker';
import { IUser } from "../templates/IUser";
interface RegTemplate {
    userLog : ILog,
    userReg : IReg,
    LogReg : ILogReg,
    Towns : {label :string, value : string}[],

    setUserLog : (some : ILog)=>void,
    setUserReg : (some : IReg)=>void,
    setLogReg : (some : ILogReg)=>void,
    LogIn : (Log : ILog)=> void,
    RegIn : (Reg : IReg)=> void,

}
const RegComponent : React.FC<RegTemplate> = (props)=> {
  return (<>
   {
                 props.LogReg.Log ?  
                 <View style = {stylesL.containerLog}>
                  <View >
                     <Text style = {stylesL.headerText}>Email adress</Text>
                     <TextInput value= {props.userLog.email} style = {stylesL.inputsyle} autoComplete="email" placeholder="Enter Email" onChangeText={(e)=> props.setUserLog({...props.userLog, email :e})}></TextInput>
                  </View>
                  <View>
                    <Text style = {stylesL.headerText}>Password</Text>
                    <TextInput value = {props.userLog.password} style = {stylesL.inputsyle} autoComplete ="password" placeholder="password" onChangeText={(e)=> props.setUserLog({...props.userLog, password :e})}></TextInput>
                  </View>
                  
                  <TouchableOpacity style = {stylesL.buttonStyle} onPress = { () => props.LogIn(props.userLog)} >
                  <View style = {{width: "100%" , height : "100%" ,display : "flex", alignItems : "center", justifyContent : "center"}}>
                     <Text style = {{color : "white", textAlign : "center"}}>Sing-in</Text>
                     </View>
                  </TouchableOpacity>
                 </View>
                 : <View style = {stylesL.containerLog}>
                  <View >
                     <Text style = {stylesL.headerText}>Email adress</Text>
                     <TextInput value= {props.userReg.email} style = {stylesL.inputsyle} autoComplete="email" placeholder="Enter Email" onChangeText={(e)=> props.setUserReg({...props.userReg, email :e})}></TextInput>
                  </View>
                  <View>
                    <Text style = {stylesL.headerText}>Password</Text>
                    <TextInput value= {props.userReg.password} style = {stylesL.inputsyle} autoComplete ="password" placeholder="password" onChangeText={(e)=> props.setUserReg({...props.userReg, password :e})}></TextInput>
                  </View>
                  <View>
                    <Text style = {stylesL.headerText}>Name</Text>
                    <TextInput value= {props.userReg.name} style = {stylesL.inputsyle}  placeholder="Name" onChangeText={(e)=> props.setUserReg({...props.userReg, name :e})}></TextInput>
                  </View>
                  <Picker 
                  style = {{width : 314 , borderTopWidth: 1, borderBottomWidth : 1, borderColor : "black"}}
                  
                  selectedValue={props.userReg.town}
                  onValueChange={(itemValue : string, itemIndex) => props.setUserReg({...props.userReg, town : itemValue})}>
                     {
                      props.Towns.map((e)=> <Picker.Item key={e.value} label= {e.label} value= {e.value}></Picker.Item>)
                     }
                  </Picker> 
                 <TouchableOpacity style = {stylesL.buttonStyle} onPress ={() => props.RegIn(props.userReg)} >
                 <View style = {{width: "100%" , height : "100%" ,display : "flex", alignItems : "center", justifyContent : "center"}}>
                    <Text style = {{color : "white", textAlign : "center"}}>Sign-up</Text>
                    </View>
                 </TouchableOpacity>
                </View>

             }

  </>)
}
export default RegComponent;