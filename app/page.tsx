import BottomFooter  from './components/footer'
import Header  from './components/nav'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopFooter  from './components/footer'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />

    <TopFooter />
    </>
  )
}
