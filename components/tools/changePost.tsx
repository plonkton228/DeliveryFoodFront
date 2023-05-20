import { SaleApi } from "../../services/SaleApi";
import { MapPostTemplate } from "../templates/IMapPost";



export const changePost = (posts : MapPostTemplate[] , post : MapPostTemplate, type : string,  )=> {
  let CheckDel = false;
    if( type == "+")
    {
        posts.map((e)=> {
            if(e.id == post.id)
            {
              e.counter++
            }
     })
    }
    else if (type == "-") {
        posts.map((e)=> {
            if(e.id == post.id)
            {
              e.counter  <= 1 ? alert('Ошибка!') : e.counter--
            }
     })
    }
 
  
   return [...posts ]
  
}