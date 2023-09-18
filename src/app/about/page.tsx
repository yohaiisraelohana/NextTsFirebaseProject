import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About ',
  description: 'About Page',
}

export const dynamic = 'force-static';

export default function AboutPage() {
  return (<>
    <h1>AboutPage</h1>
</>)
}