import React, { useMemo, useState } from "react";
import { View, Text,} from "react-native";
import { postAPI } from "../services/PostApi";
import { HomeStyle } from "./styles/HomeStyle";
import {  MainPageStyle } from "./styles/MainPage";
import { IPost } from "./templates/IPost";
import HomeContent from "./UI/HomeContent";
import Slider from "./UI/Slider";


const Home : React.FC = ()=> {
  const [QueryPost, setQueryPost] = useState<number>(1);
  const {data = [], isLoading} = postAPI.useFetchPostByIdQuery(QueryPost);
  const [inputValue,setInputValue] = useState<string>('');
  const searchPost = useMemo( ()=> {
        return data.filter((post : IPost)=> post.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
  },[inputValue,data])
    return (<>
     <View style ={MainPageStyle.contentContainer}>
        <HomeContent setInputValue={setInputValue} setQueryPost = {setQueryPost} inputValue = {inputValue}/>
        <View style ={HomeStyle.contentContainer} >
                   {
                    data != null ?
                      <Slider data={searchPost}/>
                    : <View><Text>Загрузка!</Text></View>
                   }
        </View>
     </View>
    </>)
}
export default Home;