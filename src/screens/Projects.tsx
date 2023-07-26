'use client'

import Project from '@/components/Project'
import { Roboto, Roboto_Mono } from '@next/font/google'

import html from '../../public/data/tecnologias/html.svg'
import css from '../../public/data/tecnologias/css.svg'
import js from '../../public/data/tecnologias/js.svg'
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
import useTheme from '@/hooks/useTheme'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Projects() {
  const { theme } = useTheme()
  return (
    <div
      className={`${roboto.className} ${
        theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-black'
      } md:px-[10%] my-auto pt-6 md:pt-16 px-[8%] pb-20 md:pb-40`}
      id="projetos"
    >
      <h1 className={`${robotoMono.className} title mb-6`}>
        Principais Projetos
      </h1>
      <div className="mt-4 flex flex-col md:flex-row gap-4 md:flex-wrap">
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
        <Project
          site="https://bacarinx.github.io/Nlw/"
          repositorio="https://github.com/Bacarinx/Nlw"
          image={nlw}
          title={'NLW Esports'}
          body={
            'Primeiro site que desenvolvi, logo quando descobri o mundo da programação. Desenvolvido durante o projeto "Next Level" da Rocket Seat.'
          }
          tecs={[
            { name: 'html', link: html },
            { name: 'css', link: css },
          ]}
        />
        <Project
          site="https://bacarinx.github.io/desafio01-teamplate/"
          repositorio="https://github.com/Bacarinx/desafio01-teamplate"
          image={desafio1}
          title={'Card NFT'}
          body={
            'Esse site foi o 1° Desafio realizado pelo site "Front-end Mentor", em que o desafio se baseava na construção de um Card para NFT.'
          }
          tecs={[
            { name: 'html', link: html },
            { name: 'css', link: css },
          ]}
        />
        <Project
          site="https://bacarinx.github.io/desafio02-landingpage/"
          repositorio="https://github.com/Bacarinx/desafio02-landingpage"
          image={desafio2}
          title={'Landing page Filo'}
          body={
            'Esse site foi o 2° Desafio realizado pelo site "Front-end Mentor", em que o desafio se baseava na construção de uma lading page contendo as informações principais da página, como as informações sobre a empresa, o meio de contato, etc.'
          }
          tecs={[
            { name: 'html', link: html },
            { name: 'css', link: css },
          ]}
        />
        <Project
          site="https://bacarinx.github.io/news-homepage/"
          repositorio="https://github.com/Bacarinx/news-homepage"
          image={desafio3}
          title={'News Homepage'}
          body={
            'Esse site foi o 3° Desafio realizado pelo site "Front-end Mentor", em que foi desenvolvida a parte de apresentação de um blog/site de notícas contendo as principais noticias e a divisão de páginas.'
          }
          tecs={[
            { name: 'html', link: html },
            { name: 'css', link: css },
          ]}
        />
        <Project
          site="https://bacarinx.github.io/projeto-calculadora/"
          repositorio="https://github.com/Bacarinx/projeto-calculadora"
          image={calculadora}
          title={'Calculadora'}
          body={
            'Projeto desenvolvido durante o curso de Javascript do canal do Matheus Battisti, onde é feita uma calculadora que é capaz de realizar todas as operações. Neste projeto foi posto em uso o aprendizado de Javascript.'
          }
          tecs={[
            { name: 'html', link: html },
            { name: 'css', link: css },
            { name: 'js', link: js },
          ]}
        />
      </div>
    </div>
  )
}
