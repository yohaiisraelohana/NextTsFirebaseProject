'use client'
import { useSession } from 'next-auth/react';
import React from 'react'
interface RestrictedContentProps {
    children:React.ReactNode;
    fallBack?: JSX.Element;
}
export default function RestrictedContent({children , fallBack}:RestrictedContentProps) {
    const {status} = useSession(); 
    const isLogedIn : Boolean = status === 'authenticated';
    const isLoading : Boolean = status === 'loading';

    if (isLoading) 
        return null;

    if(!isLogedIn)
        return fallBack || null;
    
  return (
    <>
        {children}
    </>
  )
}
