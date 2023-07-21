'use client'

import Image, { StaticImageData } from 'next/image'
import { BsFillArrowUpRightSquareFill, BsGithub } from 'react-icons/bs'

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
      className={`w-[100%] md:w-[50%] flex border md:flex-row border-zinc-900 rounded-lg flex-col p-2 md:px-6 md:gap-3 text-gray-950 project`}
    >
      <h1 className="text-3xl md:text-3xl font-bold project-title text-center mb-4 md:mb-2">
        {title}
      </h1>
      <Image
        className="w-full project-img m-auto rounded-md"
        src={image}
        alt="Pré visualização do site"
        width={0}
        height={0}
      />
      <p className="text-zinc-800 project-body">{body}</p>
      <div className="project-footer flex justify-between gap-2 flex-col md:flex-row">
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
        <div className="flex gap-2 text-center project-btns">
          <a
            target="_blank"
            className="md:w-[auto] w-[50%] px-6 m-auto py-3 rounded-md bg-purple-900 duration-200 hover:bg-purple-950 text-white flex items-center justify-center gap-4"
            href={site}
          >
            Site
            <BsFillArrowUpRightSquareFill className="text-white" />
          </a>
          <a
            target="_blank"
            className="md:w-[auto] w-[50%] px-6 m-auto py-3 rounded-md bg-gray-900 duration-200 hover:bg-gray-950 text-white flex items-center justify-center gap-4"
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
