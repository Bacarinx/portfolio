'use client'

import Image, { StaticImageData } from 'next/image'

interface ProjectProps {
  image: StaticImageData
  title: string
  body: string
  tecs: Array<StaticImageData>
}

export default function Project({ image, title, body, tecs }: ProjectProps) {
  return (
    <div className={`w-[45%] md:w-[30%] flex`}>
      <Image src={image} alt="Pré visualização do site" width={0} height={0} />
      <h1 className="text-2xl">{title}</h1>
      <p className="text-zinc-800">{body}</p>
      <div>
        {tecs.map((tec) => (
          <Image
            className={`w-[100px]`}
            src={tec}
            alt="tec"
            width={0}
            height={0}
          />
        ))}
      </div>
    </div>
  )
}
