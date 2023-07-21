import Project from '@/app/components/Project'
import { Rowdies, Roboto } from '@next/font/google'

import html from '../../public/data/tecnologias/html.svg'
import css from '../../public/data/tecnologias/css.svg'
import js from '../../public/data/tecnologias/js.svg'
import react from '../../public/data/tecnologias/react-original.svg'
import next from '../../public/data/tecnologias/nextjs-original.svg'
import tailwind from '../../public/data/tecnologias/tailwindcss-plain.svg'
import bootstrap from '../../public/data/tecnologias/bootstrap-original.svg'
import ts from '../../public/data/tecnologias/typescript-original.svg'

import projBootstrap from '../../public/data/projects/bootstrap.jpeg'
import calculadora from '../../public/data/projects/calculadora.jpeg'
import desafio1 from '../../public/data/projects/desafio1.jpeg'
import desafio2 from '../../public/data/projects/desafio2.jpeg'
import desafio3 from '../../public/data/projects/desafio3.jpeg'
import nlw from '../../public/data/projects/nlw.jpeg'
import veterinaria from '../../public/data/projects/veterinaria.jpeg'

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Projects() {
  return (
    <div
      className={`${roboto.className} md:px-[15%] my-auto mt-6 md:mt-16 px-[8%]`}
    >
      <h1 className={`${rowdies.className} title`}>Principais Projetos</h1>
      <div>
        <Project image={} title={} body={} tecs={[ts, next, tailwind]} />
      </div>
    </div>
  )
}
