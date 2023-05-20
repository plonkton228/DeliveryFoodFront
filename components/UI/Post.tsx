import { View , TouchableOpacity, Image, Text} from "react-native"
import { postAPI } from "../../services/PostApi";
import { useNavigate, useParams } from "react-router-native";
import { InfoFoodStyle } from "../styles/InfoFoodStyle";import { PageSettingsTemplate } from "../templates/ISettingsPage";
import { useContext } from "react";
import { SaleApi } from "../../services/SaleApi";
import { useTypeSelector } from "../hooks/redux";
import axios from "axios";
import { ApiConnection } from "../../services/ApiConnect";
;

interface PostTemplate {
    pageSetting : PageSettingsTemplate,
    
    setPageSetting: ({}:PageSettingsTemplate )=>void,
  }
const Post : React.FC<PostTemplate> = ({pageSetting, setPageSetting})=> {
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);
    const {data} = postAPI.useFetchPostByIdsQuery(Number(id))
    const {user} = useTypeSelector(state => state.user)
 
    const Press = ()=> {
        navigate('/');
    }
    const SalePress = ()=> {
        console.log(user.id);
        if(id && user)
        {
             axios.post(`${ApiConnection}sales`, {params:{user_id: user.id, post_id : id,counter : 1, type : "sale"}})
        }
       navigate('/');
    }
    return(<>
    
       <View style = {InfoFoodStyle.MainContainer}>
            <View style = {InfoFoodStyle.NavigateBar}>
              <TouchableOpacity onPress={()=> Press()}><Image source={require('../image/PostsImage/Arrows.png')} /></TouchableOpacity>
             <Image source={require('../image/PostsImage/Hearts.png')} />
            </View>
            {
                data ? 
                <View style ={InfoFoodStyle.contentContainer}>
                    <View style = {{flexGrow : 2,display : "flex", alignItems: "center" , marginBottom : 20}}>
                     <Image source={require('../image/PostsImage/Food.png')} />
                     <View><Text style ={{fontSize: 28, fontWeight: "600", color: "black"}}>{data[0].title}</Text></View>
                     <View><Text style ={{fontSize: 22, fontWeight: "700", color: "#FA4A0C"}}>{data[0].costs}</Text></View>
                    </View>
                <View style ={InfoFoodStyle.innerContainer}>
                    <View style ={{flexGrow: 0.1}}>
                     <View><Text style ={InfoFoodStyle.h1}>Delivery info</Text></View>
                     <View><Text style = {InfoFoodStyle.textDecorate}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text></View>
                    </View>
                    <View style ={{flexGrow: 0.4}}>
                     <View><Text style = {InfoFoodStyle.h1}>Return policy</Text></View>
                     <View><Text style = {InfoFoodStyle.textDecorate}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text></View>
                    </View>
                     <TouchableOpacity onPress={()=> SalePress()} style ={InfoFoodStyle.TouchStyle}><Text style = {{color: 'white', fontSize: 17, fontWeight: '600'}}>Add to cart</Text></TouchableOpacity>
                </View>
            </View>
            :
            <View><Text>Загрузка!</Text></View>
            }
           
       </View>
    </>)
}

export default Post;