import React, { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPosts';

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()


    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3);
        // }, 2000);
    }, []);

    const handleCreate = async () => {
        const title = prompt("Enter post title");
        if (title) {
            const newPost: IPost = {
                id: Date.now(), 
                title,
                body: title
            };
            await createPost(newPost); 
        }
    };

    const handleRemove = (post: IPost) => {
        deletePost(post);
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post);
    }


    return (
        <div>
            <div className='post_list'>
                <button onClick={handleCreate}>Add new post</button>
                <button onClick={() => refetch()}>REFETCH</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error</h1>}
                {posts && posts.map(post =>
                    <PostItem remove= {handleRemove} update={handleUpdate} key={post.id} post={post} />
                )}
            </div>
        </div>
    );
}

export default PostContainer;
