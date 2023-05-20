import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { ApiConnection } from "./ApiConnect";

export const SaleApi = createApi(
   {
     reducerPath: "SaleReducer",
     baseQuery :fetchBaseQuery({baseUrl: `${ApiConnection}`}),
     endpoints: (builder)=> ({
        addSale : builder.query({
          query: (id : {user_id: Number, post_id : string})=> ({
            url: 'sales',
            params: {
              user_id : id.user_id,
              post_id: id.post_id
            }
          })
        }),
        deleteSale : builder.query({
          query:(id: number) => ({
             url : `sales/${id}`,
             params : {
              id: id
             }
          })
        })

     })

   }
)