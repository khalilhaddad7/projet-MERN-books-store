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
        })
    })
    

})
export const {useFetchAllBooksQuery} = booksApi;
export default booksApi ;