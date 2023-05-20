import {IUser} from '../templates/IUser'
import {ProfileStyle} from '../styles/ProfileStyle'
import { View, Image , Text } from 'react-native'
interface TemplateInfoUser {
    user : IUser
}


const InfoUser : React.FC <TemplateInfoUser> =({user})=> {
 return(<>
     <View style ={ProfileStyle.InfoContainer}>
            <Image source={require('../image/Profile/Rectangle.png')}></Image>
            <View style ={ProfileStyle.InfoInner}>
              <Text style = {{color : "black", fontWeight: '600', fontSize: 18}}>{user.name}</Text>
              <Text>{user.email}</Text>
              <View style = {ProfileStyle.hr}/>
              <Text>{user.town}</Text>
              <View style = {ProfileStyle.hr}/>
              <Text >No 15 uti street off ovie palace road effurun delta state</Text>
            </View>
          </View>
 </>)
}
export default InfoUser;