'use client'
import React from 'react'
import Link from 'next/link';
import { deletePost } from '../../services/postsClient';
import { useRouter } from 'next/navigation';
export default function PostsActions(props:{postId:string}) {
    const {postId} = props;
    const {push} = useRouter();

  return (
    <div className="flex ml-auto gap-3">
    <Link 
        href={`/posts/${postId}/edit`}
        className='btn'
        >Edit</Link>
    <button
        onClick={async () =>{ 
            await deletePost(postId);
            push("/posts")
        }}
        className='btn-red'
        >Delete</button>
</div>
  )
}
