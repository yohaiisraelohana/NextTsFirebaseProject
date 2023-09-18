import React from 'react'
import PostsHeader from '../../components/posts/PostsHeader'
import PostsPreview from '../../components/posts/PostsPreview'
import { Metadata } from "next"

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Posts | Preview',
  description: 'Posts Page',
}

export default async function PostPage() {

  return (<>
      <PostsHeader/>
      <PostsPreview />
</>)
}


/*
import React from 'react'
import PostsHeader from '../../components/posts/PostsHeader'
import PostsPreview from '../../components/posts/PostsPreview'
import { Metadata } from "next"
import { getPosts } from '../../services/posts'

export const metadata: Metadata = {
  title: 'Posts | Preview',
  description: 'Posts Page',
}
export default async function PostPage() {
    const  posts : PostInt[] = await getPosts();
  return (<>
      <PostsHeader/>
      <PostsPreview posts={posts}/>
</>)
}
*/