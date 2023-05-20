import { View,TouchableOpacity,Image } from "react-native";
import {  MainPageStyle, MenuStyle } from "../styles/MainPage";
interface TemplateHeader {
    AnimateMenu : ()=> void,
}

const HeaderComponent : React.FC<TemplateHeader> = ({AnimateMenu}) => {
    return(<>
       <View style ={MainPageStyle.header}>
                 <TouchableOpacity onPress={()=> AnimateMenu()}>
                  <Image source={require('../image/MenuButton.png')}/>
                 </TouchableOpacity>
                 <TouchableOpacity>
                  <Image source={require('../image/shopping.png')}/>
                 </TouchableOpacity>
                </View>
    </>)
}
export default HeaderComponent;