import { MapPostTemplate } from "../templates/IMapPost";
import { IPost } from "../templates/IPost";
import { ISale } from "../templates/ISale";

export const getArrayId = (sales : ISale[])=> {
    const idPost : string[] = [];
    const counterPost : number[] = [];
    const idSale : string[] = [];
    sales.map((e)=> idPost.push(e.post_id));
    sales.map((e)=> counterPost.push(e.counter));
    sales.map((e)=> idSale.push(e.id));
    return {idPost,  counterPost, idSale};
}

export const FullPosts = (posts : IPost[][], counter : number[], idSale : string[])=>
{
  const DecPosts : MapPostTemplate[] = [];
  posts.forEach((element,index)=> {
      element.forEach((e)=> {
            DecPosts.push({...e, counter: counter[index], idSale:idSale[index]})
      })
  })
   return DecPosts
}
