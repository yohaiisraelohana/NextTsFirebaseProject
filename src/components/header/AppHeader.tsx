import Link from 'next/link';
import AppHeaderUser from './AppHeaderUser';

const MENU_ITEMS = [
    {name:"Home",path:"/"},
    {name:"Posts",path:"/posts"},
    {name:"About",path:"/about"}
];

export default function AppHeader() {
  return (
    <header>
        <nav 
            className='p-3 bg-sky-600'>
            <ul 
                className='flex gap-4 mx-auto w-[80vw]'>
                {
                    MENU_ITEMS.map((item) => (
                        <Link
                            className='p-2 text-white hover:bg-sky-400 rounded-md' 
                            key={item.name} 
                            href={item.path}
                            >{item.name}</Link>
                    ))
                }
                <AppHeaderUser/>
            </ul>
            
        </nav>

    </header>
  )
}
