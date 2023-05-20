import { FlatList } from "react-native-gesture-handler"
import { IPost } from "../templates/IPost"
import PostOrder from "./PostOrder"
import { MapPostTemplate } from "../templates/IMapPost"

interface SliderOrderTemplate
{
  data: MapPostTemplate[]
  cnangeCounter : (post : MapPostTemplate, type : string)=> void,
  DeletePost : (post: MapPostTemplate) => void,
}

const SliderOrder : React.FC<SliderOrderTemplate> = ({data,cnangeCounter,DeletePost})=> {
    console.log(data);
    return(<>
        <FlatList
          data={data}
          renderItem={({item}) => <PostOrder post={item} cnangeCounter={cnangeCounter} DeletePost={DeletePost} />}
          horizontal = {false}
        />
    </>)
}
export default SliderOrder