import React, { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer2 = () => {
    const [limit, setLiemit] = useState(10)
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)

    
    return (
        <div>
            <div className='post_list'>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post} />
                )}
            </div>
        </div>
    );
}

export default PostContainer2;
