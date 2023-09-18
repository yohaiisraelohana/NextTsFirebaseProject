
import React from 'react'
import { getPost } from '../../services/postsServer';
import PostsActions from './PostsActions';
import RestrictedContent from '../reusable/RestrictedContent';


interface PostDetailsProps {
    postId : string;
}

export default async function PostDetails( props : PostDetailsProps) {
    const { postId } = props;
    const {title , body} = await getPost(postId);

    
  return (
    <>
        <header className='flex mt-2 items-center '>
            <h1>{title}</h1>
            <RestrictedContent>
              <PostsActions postId={postId} />
            </RestrictedContent>
        </header>
        <p>{body}</p>
    </>
  )
}
