import { HomeStyle } from "../styles/HomeStyle"
import { View, Text, Image, TextInput,TouchableOpacity } from "react-native"
interface HomeContentTemplate {
    inputValue : string,
     
    setInputValue : ( str : string) => void,
    setQueryPost : ( num : number) => void,

}
const HomeContent : React.FC<HomeContentTemplate> = ({setInputValue, setQueryPost, inputValue})=> {
    return(<>
     <View style ={HomeStyle.observeCont}>
         <Text style ={HomeStyle.h1}>Delicious </Text>
         <Text style ={HomeStyle.h1}>food for you</Text> 
        </View>
        <View style ={HomeStyle.observeCont}>
          <Image
            source={
              require('../image/drawable/Search.png')
            }
           style ={HomeStyle.ImageDec}
          />
          <TextInput
            style ={HomeStyle.DecInput}
            placeholder="Search"
            onChangeText={(text)=> setInputValue(text)}
            value ={inputValue}
          />
        </View>
        <View style = {HomeStyle.NavigateContainer}>
         <TouchableOpacity onPress={()=> setQueryPost(1)}><Text>Food</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> setQueryPost(2)}><Text>Drinks</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> setQueryPost(3)}><Text>Snacks</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> setQueryPost(4)}><Text>Sauce</Text></TouchableOpacity>
        </View>  

    </>)
}
export default HomeContent