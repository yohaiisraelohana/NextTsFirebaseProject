import Image from 'next/image'
import React from 'react'
import Link from 'next/link';



export default function PostCard({post}:{post:PostInt}) {
  return (
    <Link 
    className='border rounded-md my-3'
    href={`/posts/${post.id}`} >
        <Image 
            priority
            alt={`post ${post.title}`}
            src={`https://fakeimg.pl/600x400?text=${post.id}`}
            width="600"
            height="600"
            className='w-full rounded-t-md'
             />
        <h1 className='p-2 font-bold text-xl'>{post.title}</h1>
        <p className='p-2 '>{post.body.slice(0,50)}</p>
    </Link>
  )
}
