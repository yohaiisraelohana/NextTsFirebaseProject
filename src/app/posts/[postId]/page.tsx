import React from 'react'
import PostDetails from '../../../components/posts/PostDetails';

interface PostView {
    params:{
        postId:string;
    }
}

export function generateMetadata(props:PostView){
    return {
        title: `Posts | ${props.params.postId}`,
        description:"Post Details"
    }
}

export const dynamic = 'force-static';


export default async function PostViewPage(props:PostView){
    const {postId } = props.params;
    
    
  return ( <PostDetails postId={postId} /> )
}