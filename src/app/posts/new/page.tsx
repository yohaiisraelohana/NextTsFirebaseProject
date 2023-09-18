import React from 'react'
import { Metadata } from 'next'
import AddPost from '../../../components/posts/AddPost'

export const metadata: Metadata = {
  title: 'Posts | New',
  description: 'Posts Page',
}
export const dynamic = 'force-static';
export default function NewPostPage() {
  
  return (<>
    <h1>NewPostPage</h1>
    <AddPost/>
</>)
}