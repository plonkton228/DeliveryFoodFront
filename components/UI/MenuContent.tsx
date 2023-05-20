import { View , TouchableOpacity, Image, Text} from "react-native"
import { MenuStyle } from "../styles/MainPage"
import { PageSettingsTemplate } from "../templates/ISettingsPage"
interface MenuContentTemplate {
    pageSetting : PageSettingsTemplate,
    setPageSetting: ({}:PageSettingsTemplate )=>void,
    LogOut : ()=>void
}
const MenuContent: React.FC<MenuContentTemplate> =({pageSetting,setPageSetting, LogOut })=> {
    return (<>
       <View style ={{ display :pageSetting.showMenu ? 'none' : 'flex', marginLeft: 25, height : 300, justifyContent : "space-between"}}>

              <TouchableOpacity  onPress={() => setPageSetting({...pageSetting, page:'home', focus: 'home'})} style ={{...MenuStyle.InnerContainer,  borderWidth : pageSetting.focus == 'home' ? 1 : 0}}>
                   <Image source={require('../image/Home.png')}/>
                   <Text style = {MenuStyle.TextStyle}>Home</Text>
               </TouchableOpacity>
               <View style ={MenuStyle.contentContainer}/>
               <TouchableOpacity onPress={() => setPageSetting({...pageSetting, page:'profile', focus: 'profile'})} style ={{...MenuStyle.InnerContainer, borderWidth : pageSetting.focus == 'profile' ? 1 : 0}} >
                   <Image source={require('../image/Profile.png')}/>
                   <Text style = {MenuStyle.TextStyle}>Profile</Text>
               </TouchableOpacity>
               <View style ={MenuStyle.contentContainer}/>
               <TouchableOpacity  onPress={() => setPageSetting({...pageSetting, page:'orders', focus: 'orders'})} style ={{...MenuStyle.InnerContainer,  borderWidth : pageSetting.focus == 'orders' ? 1 : 0 }}>
                   <Image source={require('../image/Orders.png')}/>
                   <Text style = {MenuStyle.TextStyle}>Orders</Text>
               </TouchableOpacity>
               <View style ={MenuStyle.contentContainer}/>
               <TouchableOpacity  onPress={() => setPageSetting({...pageSetting, page:'privacy', focus: 'privacy'})} style ={{...MenuStyle.InnerContainer ,  borderWidth : pageSetting.focus == 'privacy' ? 1 : 0}}>
                   <Image source={require('../image/Offers.png')}/>
                   <Text style = {MenuStyle.TextStyle}>Privacy</Text>
               </TouchableOpacity>
               <View style ={MenuStyle.contentContainer}/>
               <TouchableOpacity  onPress={() => setPageSetting({...pageSetting, page:'security', focus: 'security'})} style ={{...MenuStyle.InnerContainer,  borderWidth : pageSetting.focus == 'security' ? 1 : 0}}>
                   <Image source={require('../image/Secturity.png')}/>
                   <Text style = {MenuStyle.TextStyle}>Security</Text>
               </TouchableOpacity>

               
            </View>


            <TouchableOpacity onPress={()=> LogOut()} style ={{...MenuStyle.InnerContainer2, display :pageSetting.showMenu ? 'none' : 'flex'}}>
             <Text style = {{color: "#FFFFFF" , textAlign: "center"}}>Sign-out</Text>
             <Image style = {{marginLeft : 10}} source={require('../image/Arrow.png')} />
            </TouchableOpacity>
    </>)
}
export default MenuContent