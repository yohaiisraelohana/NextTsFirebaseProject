'use client'
import React, { useState } from 'react'
import  {useRouter}  from 'next/navigation'



export default function PostForm( props : {onSubmitFunc:Function , title? : string , body? : string}) {
    const [title , setTitle] = useState<string>(props.title || "");
    const [body , setBody] = useState<string>(props.body || "");
    const {push} = useRouter();

    const handleSubmit = async (e : React.FormEvent  ) => {
        e.preventDefault();
        await props.onSubmitFunc({title,body});
        push("/posts");
    }

  return (
    <form onSubmit={handleSubmit}
        className='w-[60vw] m-auto flex flex-col'>
        <label 
            >Title</label>
        <input 
            value={title}
            className='border border-sky-300 mb-3 px-1 outline-sky-300'
            onChange={(e)=>setTitle(e.target.value)}
            type="text" />

        <label
            >Body</label>
        <textarea 
            value={body}
            className='border border-sky-300 mb-4 px-1 outline-sky-300'
            onChange={(e)=>setBody(e.target.value)}
            rows={20}/>
        
        <button 
            className='btn'
            >SEND</button>
    </form>
  )
}
