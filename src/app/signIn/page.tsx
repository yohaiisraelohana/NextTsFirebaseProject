'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function SignInPage() {
    const handleSignIn = () => {
        signIn('google');
    }
  return (
    <div >
        <div className="">
            Sign In 
        </div>
        <button
            className='btn'
            onClick={()=>handleSignIn()}
            >Sign In
        </button>
    </div>
  )
}
