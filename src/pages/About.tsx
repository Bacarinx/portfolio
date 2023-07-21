import Tecnologia from '@/app/components/Tecnologia'
import { Rowdies, Roboto } from '@next/font/google'
import foto from '../../public/data/FotoPessoal.png'
import html from '../../public/data/tecnologias/html.svg'
import css from '../../public/data/tecnologias/css.svg'
import js from '../../public/data/tecnologias/js.svg'
import react from '../../public/data/tecnologias/react-original.svg'
import next from '../../public/data/tecnologias/nextjs-original.svg'
import tailwind from '../../public/data/tecnologias/tailwindcss-plain.svg'
import bootstrap from '../../public/data/tecnologias/bootstrap-original.svg'
import git from '../../public/data/tecnologias/git-original.svg'
import github from '../../public/data/tecnologias/github-original.svg'
import typescript from '../../public/data/tecnologias/typescript-original.svg'
import Image from 'next/image'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function About() {
  return (
    <div
      className={`${roboto.className} md:px-[15%] my-auto mt-6 md:mt-16 px-[8%]`}
    >
      <div className="about container" id="about">
        <h1 className={`${rowdies.className} title container-title`}>Sobre</h1>
        <div className="container-body md:mb-6 mb-4 text-center md:text-start">
          <p>
            Olá, eu sou o Henrique. Nasci em 2005, em São Paulo, e minha paixão
            pela tecnologia vem desde criança, mas comecei a programar mesmo em
            começo de 2022. Minha paixão sempre foi pelo
            <span className="font-bold"> Front-end</span>.
          </p>
          <p>
            Ainda sou apenas um estudante de programação, indo em busca da sua
            primeira oportunidade dentro do mercado.
          </p>
        </div>
        <Image
          className={`w-[300px] rounded-full container-image md:justify-self-end items-center m-auto md:mx-0 my-6`}
          src={foto}
          alt="foto pessoal"
          width={0}
          height={0}
        />
      </div>
      <h1 className="mt-6 subtitle">Tecnologias</h1>
      <div className="tecnologias flex gap-6 justify-center items-center mb-20 mt-6 flex-wrap">
        <Tecnologia image={html} text={'Html'} />
        <Tecnologia image={css} text={'Css'} />
        <Tecnologia image={js} text={'Javascript'} />
        <Tecnologia image={typescript} text={'typescript'} />
        <Tecnologia image={react} text={'React'} />
        <Tecnologia image={next} text={'NextJs'} />
        <Tecnologia image={tailwind} text={'TailwindCss'} />
        <Tecnologia image={bootstrap} text={'Bootstrap'} />
        <Tecnologia image={git} text={'Git'} />
        <Tecnologia image={github} text={'Github'} />
      </div>
    </div>
  )
}
