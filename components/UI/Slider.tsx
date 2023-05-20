import { FlatList } from "react-native-gesture-handler"
import { IPost } from "../templates/IPost"
import PostComponent from "./SliderComponent"

interface SliderTemplate {
    data : IPost[],
}
const Slider : React.FC<SliderTemplate> = ({data})=> {
    return(<>
      <FlatList
        data={data}
        renderItem = {({item})=> <PostComponent id = {item.id}  description= {item.description} title = {item.title} costs = {item.costs}  img = {item.img}/>}
        horizontal ={true}/>
    </>)
}
export default Slider