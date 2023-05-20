import {IUser} from '../templates/IUser'
import {ProfileStyle} from '../styles/ProfileStyle'
import { View, Image , TextInput, Text } from 'react-native'
interface TemplateInfoUser {
    user : IUser,
    SetStateUser : React.Dispatch<React.SetStateAction<IUser>>,
    StateUser : IUser,
}


const ChangeInfoUser : React.FC <TemplateInfoUser> =({user,SetStateUser,StateUser})=> {
    const Change = (e: any)=>
    {
       console.log(e.currentTarget)
    }
    return(<>
        <View style ={ProfileStyle.InfoContainer}>
            <Image source={require('../image/Profile/Rectangle.png')}></Image>
            <View style ={ProfileStyle.InfoInner}>
              <TextInput style = {{color : "black", fontWeight: '600', fontSize: 18}} value = {StateUser.name} onChangeText={(e) => SetStateUser({...StateUser, name : e})}/>
              <TextInput autoComplete="email" placeholder="Enter Email" value = {StateUser.email} onChangeText={(e) => SetStateUser({...StateUser, email: e})}/>
              <View style = {ProfileStyle.hr}/>
              <TextInput value= {StateUser.town} onChangeText={(e)=> SetStateUser({...StateUser, town :e})}></TextInput>
              <View style = {ProfileStyle.hr}/>
               <TextInput >No 15 uti street off ovie palace road effurun delta state</TextInput>
            </View>
          </View>
    </>)
   }
   export default ChangeInfoUser;