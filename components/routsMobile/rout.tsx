import axios from "axios";
import { useTypeSelector } from "../hooks/redux";
import Order from "../Order";
import Payment from "../home";
import Profile from "../Profile";
import { IRoutMobile } from "../templates/IRoutMobile";


export const routMobile: IRoutMobile[] = [{name :"Order", component : Order},
{name :"Payment", component : Payment},
{name :"Profile", component : Profile},
]


