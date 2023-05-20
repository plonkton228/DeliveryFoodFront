import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { ApiConnection } from "./ApiConnect";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl:`${ApiConnection}`}),
    endpoints:(build)=>({
        fetchPostById: build.query({
            query: (id: number)=>({
                url: `/posts`,
                params:{
                    id: id
                }
            })
        }),
        fetchPostByIds: build.query({
            query: (id: number)=> ({
                url: `posts/${id}`,
            
                params: {
                    id:id
                }
            })
           
        }),
        fetchSalesById: build.query({
            query: (id: number) => ({
                url: `sales`,
                params : {
                    id:id
                }
            })
        })
    })
})