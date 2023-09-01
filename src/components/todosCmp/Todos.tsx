'use client'
import React from 'react'

//STATES
import { useAtom } from 'jotai';
import { todoListAtom } from '../../states/todoState';
//COMPONENTS
import Todo from './Todo';


export default function Todos() {
    const [todoList , setTodoList] = useAtom(todoListAtom);
    console.log(todoList);
  return (
    <div>

        { 
            todoList
                .map(todo => <Todo  
                    key={todo.id} 
                    title={todo.title} 
                    isComplited={todo.isComplited} 
                    id={todo.id}/>) 
        }
    </div>
  )
}
