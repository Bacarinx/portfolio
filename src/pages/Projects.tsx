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
      className={`${roboto.className} md:px-[10%] my-auto mt-6 md:mt-16 px-[8%]`}
      id="projects"
    >
      <h1 className={`${rowdies.className} title`}>Principais Projetos</h1>
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <Project
          site="https://lp-veterinaria.vercel.app/"
          repositorio="https://github.com/Bacarinx/lp-veterinaria"
          image={veterinaria}
          title={'LP-Veterinária'}
          body={
            'Neste projeto, foi tido como inspiração e como clone a página "ERP Veterinária", em que pela primeira vez coloquei em prática as habilidades em NextJs e TailwindCss.'
          }
          tecs={[
            { name: 'ts', link: ts },
            { name: 'next', link: next },
            { name: 'tailwind', link: tailwind },
          ]}
        />
        <Project
          site="https://bacarinx.github.io/projeto-Bootstrap/"
          repositorio="https://github.com/Bacarinx/projeto-Bootstrap"
          image={projBootstrap}
          title={'Projeto Bootstrap'}
          body={
            'Este site foi concluido ao final do mini curso de BootStrap que eu havia feito. Como finalização, coloquei em prática tudo o que havia aprendido durante o curso.'
          }
          tecs={[
            { name: 'html', link: html },
            { name: 'css', link: css },
            { name: 'js', link: js },
            { name: 'bootstrap', link: bootstrap },
          ]}
        />
      </div>
    </div>
  )
}
