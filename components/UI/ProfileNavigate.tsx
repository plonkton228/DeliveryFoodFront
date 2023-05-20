import { View, Text,TouchableOpacity , Image} from "react-native"

import { ProfileStyle } from "../styles/ProfileStyle";
interface TemplateProfileNavigate {
   NameSection : string,
   way : string,
}


const ProfileNavigate : React.FC<TemplateProfileNavigate> = ({NameSection})=> {
   return(<>
     <View style ={ProfileStyle.NavigateContainer}>
        <Text style ={{fontWeight: "600", fontSize : 18,color: "black"}}>Orders</Text>
        <TouchableOpacity><Image source={require('../image/Profile/ArrowLeft.png')}></Image></TouchableOpacity>
     </View>
    
   </>)
}
export default ProfileNavigate;