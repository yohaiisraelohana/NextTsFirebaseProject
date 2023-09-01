'use client'
import React from 'react'
import { TodoINTR } from '../../types/todo'


export default function Todo( todo : TodoINTR ) {
    
  return (
    <div className='flex justify-between w-[60vw]'>
        <h2>{todo.title}</h2>
        <div className="flex">
            <button 
                onClick={()=>console.log("delete - " + todo.id)}
                >Del</button>
            <input type='checkbox' />
        </div>
    </div>
  )
}

