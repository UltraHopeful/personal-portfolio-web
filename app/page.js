import Header from '@/components/header'
import Image from 'next/image'
import Intro from '@/components/intro'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-20 p-[4vw] sm:p-24">
      <Header/>
      <Intro/>
    </main>
  )
}
