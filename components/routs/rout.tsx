import Login from "../Login";
import React from "react";
import StartComp from "../StartComp";
import { IRout } from "../templates/IRout";
import MainPage from "../MainPage";
import Post from "../UI/Post";

export const Guestrout : IRout[] = [ 
    {path : '/', element : <StartComp/>},
    {path :'/Login', element : <Login/>}];


export const  UserRout : IRout[] = [{path : '/', element : <MainPage/>}, {path: 'posts/:id' , element: <Post/>}];