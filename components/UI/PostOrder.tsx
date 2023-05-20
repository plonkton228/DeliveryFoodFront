
import { View, Text , Image, TouchableOpacity,Button} from 'react-native';
import { OrderStyle } from '../styles/OrderStyle';
import { MapPostTemplate } from '../templates/IMapPost';

interface PostOrderTemplate {
  post : MapPostTemplate,
  cnangeCounter : (post : MapPostTemplate, type : string)=> void,
  DeletePost : (post: MapPostTemplate) => void,

}


const PostOrder: React.FC<PostOrderTemplate> = ({post,cnangeCounter,DeletePost})=> {
    return(<>
    
        <View style ={OrderStyle.PostContainer}>
           <Image style ={OrderStyle.ImagePost} source={require('../image/PostsImage/FoodSmall.png')}/>
           <TouchableOpacity onPress={()=> DeletePost(post)} style ={{position: "absolute", right: 10, top: 20}}><Image source={require('../image/PostsImage/pngegg.png')}/></TouchableOpacity>
            <View style = {OrderStyle.PostInner}>
                <Text style = {OrderStyle.TextPost}>{post.title}</Text>
                <View style ={{display : "flex" , flexDirection: "row", justifyContent: "space-between"}}>
                 <Text style = {OrderStyle.CostPost}>{post.costs}</Text>
                 <View style ={OrderStyle.counterDiv}>
                  <TouchableOpacity onPress={(e)=> {cnangeCounter(post,"-")}}  style = {OrderStyle.counterTouch1}><Image source={require('../image/PostsImage/minus.png')}></Image></TouchableOpacity>
                     <Text style = {OrderStyle.counterInner}>{post.counter}</Text>
                   <TouchableOpacity onPress={(e)=> {cnangeCounter(post,"+")}} style ={OrderStyle.counterTouch2}><Image source={require('../image/PostsImage/plus.png')}></Image></TouchableOpacity>
                </View>
                </View>
            </View>
            
        </View>
    </>)
}
export default PostOrder;