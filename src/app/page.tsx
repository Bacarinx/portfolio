import About from '../screens/About'
import Projects from '../screens/Projects'
import { Oxygen } from '@next/font/google'

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <div className={`${oxygen.className} `}>
      <About />
      <Projects />
    </div>
  )
}
