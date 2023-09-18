'use client'
import React from 'react'
import PostForm from './PostForm'
import { updatePost } from '../../services/postsClient';

export default function EditPost(props:{post:PostInt}) {
  const {title , body , id} = props.post;

  return (
    <div>
        <PostForm 
          onSubmitFunc={ ( post : PostInt ) => {
            post.id = id;
            updatePost(post);
          }}
          title={title}
          body={body}
          />
    </div>
  )
}
