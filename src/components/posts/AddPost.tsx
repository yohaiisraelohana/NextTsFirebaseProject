'use client'
import React from 'react'
import PostForm from './PostForm'
import { addPost } from '../../services/postsClient'

export default function AddPost() {
    
  return (
    <div>
        <PostForm onSubmitFunc={async (post:PostInt)=>{await addPost(post)}}/>
    </div>
  )
}
