import Image from 'next/image'

interface TecnologiaProps {
  image: string
  text: string
}

export default function Tecnologia(props: TecnologiaProps) {
  return (
    <div className="md:w-[5%] w-[14%]  hover:scale-110 duration-200">
      <Image
        className=""
        title={props.text}
        src={props.image}
        alt="tec"
        width={0}
        height={0}
      />
    </div>
  )
}
