import React from 'react'
import Link from 'next/link'
import RestrictedContent from '../reusable/RestrictedContent'
export default function PostsHeader() {
  return (
    <header className='flex items-center my-3'>
        <h1>PostPage</h1>
        <RestrictedContent>
          <Link 
            className='btn ml-auto'
            href="/posts/new"
            >New Post</Link>
        </RestrictedContent>
    </header>
  )
}
