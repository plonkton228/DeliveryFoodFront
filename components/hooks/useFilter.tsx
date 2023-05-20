import { MapPostTemplate } from "../templates/IMapPost";
import { IPost } from "../templates/IPost";

export const useFilter = (posts : IPost[])=> {
  
  let MapPosts= new  Map<Number,MapPostTemplate>();

  

  posts.forEach((post,index)=> {
    let counter = 1;
    index== 0 ? MapPosts.set(10,{id: 10,
        title: '',
        description: '',
        img: '',
        costs: '',
        counter: 1})
    :
    MapPosts.forEach((MapPost)=> {
        
          if( MapPost.title === post.title)
          {
            console.log({'MapPost' : MapPost.id, 'post' : post.id})
            counter += 1;  
           
          }
    })
    MapPosts.set(post.id,{...post, counter : counter})
    
  })
  const ArrayPost : MapPostTemplate[] = Array.from(MapPosts.values());
  ArrayPost.shift();
  return   ArrayPost;
}

