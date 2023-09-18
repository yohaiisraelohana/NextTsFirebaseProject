'use client'
import { signOut, useSession} from 'next-auth/react'
import Link from 'next/link';
import RestrictedContent from '../reusable/RestrictedContent';

export default function AppHeaderUser() {
    const {data:session } = useSession();
    const handleSignOut = () => {
        signOut();
    }
  return (
    <div className=' ml-auto flex gap-4 text-white items-center'>
        <RestrictedContent
            fallBack={
                <Link 
                    className='btn'
                    href="/signIn"
                    > Sign In    
                </Link>
            }>
            <>
                <span>{session?.user?.name} </span>
                <button 
                    onClick={()=>handleSignOut()}
                    className='btn-red'
                    >Sign Out
                </button>
            </>
        </RestrictedContent>
    </div>
  )
}
