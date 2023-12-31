import { getServerSession } from "next-auth"
import { authOptions  } from "../api/auth/[...nextauth]/nextauth-config"
import { redirect } from "next/navigation";


interface SignInLayoutProps {
    children:React.ReactNode;
}

export default async function SignInLayout({children}:SignInLayoutProps) {

    const session = await getServerSession(authOptions);
    if (session) {
        return redirect("/")
    }
  return (
    <>
      {children}
    </>
  )
}
