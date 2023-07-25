import { Roboto_Mono } from '@next/font/google'
import Image, { StaticImageData } from 'next/image'
import { BsFillArrowUpRightSquareFill, BsGithub } from 'react-icons/bs'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface ProjectProps {
  site: string
  repositorio: string
  image: StaticImageData
  title: string
  body: string
  tecs: { name: string; link: StaticImageData }[]
}

export default function Project({
  image,
  title,
  body,
  tecs,
  site,
  repositorio,
}: ProjectProps) {
  return (
    <div
      className={`w-[100%] md:w-[48%] 2xl:w-[32%] flex border xl:flex-row border-zinc-300 rounded-lg flex-col p-2 md:px-6 md:gap-3 text-white project mx-auto`}
    >
      <h1
        className={`${robotoMono.className} opacity-90 text-3xl md:text-3xl font-bold project-title text-center my-4 md:mb-2`}
      >
        {title}
      </h1>
      <Image
        className="w-full project-img m-auto rounded-md"
        src={image}
        alt="Pré visualização do site"
        width={0}
        height={0}
      />
      <p className="opacity-70 project-body">{body}</p>
      <div className="project-footer flex justify-between xl:flex-row 2xl:flex-col gap-2 flex-col">
        <div className="flex justify-start gap-3 project-tecs">
          {tecs.map((tec) => (
            <Image
              className={`w-[40px] py-4 hover:scale-110 `}
              title={tec.name}
              key={tec.name}
              src={tec.link}
              alt="tec"
              width={0}
              height={0}
            />
          ))}
        </div>
        <div className="flex gap-2 text-center project-btns pb-4 items-center">
          <a
            target="_blank"
            className="xl:w-[auto] w-[50%] 2xl:w-[50%] px-4 m-auto py-3 rounded-md bg-purple-900 duration-200 hover:bg-purple-950 text-white flex items-center justify-center gap-4"
            href={site}
          >
            Site
            <BsFillArrowUpRightSquareFill className="text-white" />
          </a>
          <a
            target="_blank"
            className="xl:w-[auto] w-[50%] 2xl:w-[50%] px-4 m-auto py-3 rounded-md bg-gray-900 duration-200 hover:bg-gray-950 text-white flex items-center justify-center gap-4"
            href={repositorio}
          >
            Repositório
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  )
}
