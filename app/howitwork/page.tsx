'use client'

import Header  from '../components/nav'
import HowItWork  from '../components/howitwork'
import { Inter } from 'next/font/google'
import TopFooter  from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />

    <HowItWork/>
    <TopFooter />
    </>
  )
}
