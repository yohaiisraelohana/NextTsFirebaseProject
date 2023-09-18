import React from 'react'
//COMPONENTS
import PostCard from './PostCard';
//SERVICES
import { getPosts } from '../../services/postsServer';


export default async function PostsPreview() {
  const  posts : PostInt[] = await getPosts();

  return (
    <ul 
        className='grid grid-cols-3 gap-3'
        >{posts.map((post , index)=>(
            <PostCard post={post} key={index} />
        ))}
    </ul>
  )
}


/*
'use client'
import React from 'react'
//COMPONENTS
import PostCard from './PostCard';
//SERVICES
import { getPosts } from '../../services/posts';



export default function PostsPreview(props:{posts : PostInt[]}) {
  //const  posts : PostInt[] = await getPosts();
  const {posts} = props;
  return (
    <ul 
        className='grid grid-cols-3 gap-3'
        >{posts.map((post , index)=>(
            <PostCard post={post} key={index} />
        ))}
    </ul>
  )
}
*/