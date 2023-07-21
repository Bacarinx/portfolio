import About from '@/pages/About'
import Header from '@/pages/Header'
import Projects from '@/pages/Projects'
import { Oxygen } from '@next/font/google'

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <div className={`${oxygen.className} mb-80`}>
      <Header />
      <About />
      <Projects />
    </div>
  )
}
