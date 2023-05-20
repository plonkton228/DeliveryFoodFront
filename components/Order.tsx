import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTypeSelector } from "./hooks/redux";
import {  MainPageStyle } from "./styles/MainPage";
import { OrderStyle } from "./styles/OrderStyle";
import { MapPostTemplate } from "./templates/IMapPost";
import { IPost } from "./templates/IPost";
import { ISale } from "./templates/ISale";
import { changePost } from "./tools/changePost";
import { FullPosts, getArrayId } from "./tools/getArrayId";
import SliderOrder from "./UI/SliderOrder";
import { ApiConnection } from "../services/ApiConnect";
const Order : React.FC = ()=> {

    const {user} = useTypeSelector(state => state.user)
    const [posts, setPosts] = useState < MapPostTemplate[]>();
    console.log(posts)
    useEffect(()=> {
         axios.get<ISale[]>(`${ApiConnection}sales`, {params : {id : user.id}}).
        then( (response)=> {
            console.log(response.data);
            const {idPost, counterPost, idSale} =  getArrayId(response.data);
            console.log(idPost)
             axios.get<IPost[][]>(`${ApiConnection}getPosts`,{ params: {ids : idPost}}).
            then((e)=>  {
              const postik =  FullPosts(e.data,counterPost, idSale)
              setPosts(postik)
            })
        })
        
      },[])
      useEffect(()=> {
        return function reset (){
          if(posts)
          axios.post(`${ApiConnection}sales`, {params : {user_id: user.id, type : "order", posts: posts}}) 
    }
      },[posts])
   const ChangeCounter  =(post : MapPostTemplate, type : string)=> {
      if(posts)
      {  
         setPosts(changePost(posts, post, type))
      }
   }
   const DeletePost = (post : MapPostTemplate)=>
   {
      console.log(post.idSale)
      
      axios.delete(`${ApiConnection}sales/${post.idSale}`, {params : {id: Number(post.idSale)}}).then(()=> {
         axios.get<ISale[]>(`${ApiConnection}sales`, {params : {id : user.id}}).
         then( (response)=> {
             const {idPost, counterPost,idSale} =  getArrayId(response.data);
              axios.get<IPost[][]>(`${ApiConnection}getPosts`,{ params: {ids : idPost}}).
             then((e)=>  {
               const postik =  FullPosts(e.data,counterPost,idSale)
               setPosts(postik)
             })
         })
      })
   }
     
    return (<>
     <View style ={MainPageStyle.contentContainer}>
        <Text style = {MainPageStyle.headerh1}>swipe on an item to delete</Text>
        <View style ={{height:  "58%"}}>
        {
              posts ? 
                  <SliderOrder data={posts} cnangeCounter={ChangeCounter} DeletePost={DeletePost}/>
                  :
                 <Text>Загрузка!</Text>
        }
        </View>
    
         <TouchableOpacity style = {OrderStyle.ButtonPost}  >
                 <View style = {{width: "100%" , height : "100%" ,display : "flex", alignItems : "center", justifyContent : "center"}}>
                    <Text style = {OrderStyle.ButtonText}>Buy</Text>
                 </View>
         </TouchableOpacity>
        </View>
    
    </>)
}
export default Order;