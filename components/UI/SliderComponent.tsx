import { View , TouchableOpacity, Image, Text} from "react-native"
import { useNavigate } from "react-router-native"
import { PostStyle } from "../styles/PostStyle"
import { IPost } from "../templates/IPost"

const SliderComponent  : React.FC<IPost> = ({title,img,costs,description,id})=> {
    const navigate = useNavigate();
    const Press = ()=> {
        navigate(`posts/${id}`)
    }
    return(<>
     <TouchableOpacity onPress={()=> Press()}>
      <View style = {PostStyle.MainContainer}>
           <View style ={PostStyle.imgContainer}>
             <Image style ={{maxHeight: 321}}  source={require('../image/PostsImage/Food.png')}/>
            </View>
           <View style ={PostStyle.contentContainer}>
            <View style = {{marginBottom: 30}}>
             <Text style = {PostStyle.titleDec}>{title}</Text>
             <Text style = {{textAlign: 'center', fontSize: 17, color: "#FA4A0C"}}>{costs}</Text>
            </View>
           </View>
        </View>
     </TouchableOpacity>
       
    </>)
}
export default SliderComponent