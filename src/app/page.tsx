import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Home Page',
}
export const dynamic = 'force-static';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
    </main>
  )
}
