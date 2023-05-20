import { View,TouchableOpacity,Image } from "react-native";
import {  MainPageStyle } from "../styles/MainPage";
import { PageSettingsTemplate } from "../templates/ISettingsPage";
interface FooterComponentTemplate {
  pageSetting : PageSettingsTemplate,
  
  setPageSetting: ({}:PageSettingsTemplate )=>void,
}
const FooterComponent : React.FC<FooterComponentTemplate> = ({setPageSetting, pageSetting})=> {
    return(<>
    <View style ={MainPageStyle.footer}>
               <TouchableOpacity onPress={()=> setPageSetting({...pageSetting, focus : 'home', page: 'home' })} >
                  <Image source={require('../image/Home.png')}/>
                 </TouchableOpacity>
                 <TouchableOpacity >
                  <Image source={require('../image/heart.png')}/>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => setPageSetting({...pageSetting, page:'profile', focus: 'profile'})} >
                  <Image source={require('../image/user.png')}/>
                 </TouchableOpacity>
                 <TouchableOpacity >
                  <Image source={require('../image/HistoryPerchase.png')}/>
                 </TouchableOpacity>
               </View>
    </>)
}
export default FooterComponent;