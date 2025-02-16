import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseURL from '../../../utils/baseURL';


const baseQuery = fetchBaseQuery({
    baseUrl:`${getBaseURL()}/api/books`,
    credentials: 'include',
    prepareHeaders:(Headers)=>{
        const token = localStorage.getItem('token')
        if (token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query:() => "/get-all-books",
            providesTags: ['books']
        }),
        fetchbookbyId:builder.query({
            query: (id) => `/get-single-book/${id}`,
            providesTags: (result,error,id) => [{type : "books", id}]

        }),
        addbook: builder.mutation({
            query:(newBook) => ({
                url: `create-book`,
                method:" POST",
                body: newBook

            }),
            invalidatesTags:["Books"]
        }),
        updatebook: builder.mutation({
            query:({id,...rest}) => ({
                url: `update-book/${id}`,
                method:"PUT",
                body: rest,
                headers:{
                    'content-type':'application/json'
                }
            }),
            invalidatesTags:["Books"]
        }),
        deleteBook: builder.mutation({
            query:(id) => ({
                url:`delete-book/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Books"]

        })
    })
    

})
export const {useFetchAllBooksQuery,useFetchbookbyIdQuery,useAddbookMutation,useUpdatebookMutation,useDeleteBookMutation} = booksApi;
export default booksApi ;