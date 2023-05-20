import React from "react";
import { Routes, Route } from "react-router-native";
import { useTypeSelector } from "../hooks/redux";
import { Guestrout, UserRout } from "./rout";
const Router = ()=> {
    const {isAuth} = useTypeSelector(state => state.user)
    return (<>
         <Routes>
            {
                isAuth ? 
                UserRout.map((element)=> <Route key={element.path} path = {element.path} element = {element.element}/>)
                 
                :
                Guestrout.map((element)=> <Route key={element.path} path= {element.path} element = {element.element}/>)
                
            }
         </Routes>
    </>)
}
export default Router;