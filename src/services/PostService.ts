import { createApi, fetchBaseQuery, EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPosts';

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
});
