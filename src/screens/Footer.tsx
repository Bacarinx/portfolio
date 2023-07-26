import {
  BsLinkedin,
  BsWhatsapp,
  BsFillEnvelopeFill,
  BsGithub,
  BsFillArrowUpRightSquareFill,
} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-slate-900 text-white px-[8%] py-6 flex md:flex-row flex-col justify-around items-center"
    >
      <div className="flex flex-col mb-12 md:mb-0 items-center md:items-start">
        <h1 className="text-3xl mb-4">
          Bacarin.<span>Dev</span>
        </h1>
        <ul className="flex gap-2 mb-4">
          <a href="#" className="hover:underline">
            <li>Home</li>
          </a>
          <li>|</li>
          <a href="#sobre" className="hover:underline">
            <li>Sobre</li>
          </a>
          <li>|</li>
          <a href="#projetos" className="hover:underline">
            <li>Projetos</li>
          </a>
          <li>|</li>
          <a href="#contato" className="hover:underline">
            <li>Contato</li>
          </a>
        </ul>
        <p className="text-sm opacity-70">Henrique Bacarin &copy;</p>
      </div>

      <div className="flex flex-col gap-2">
        <a
          className="flex items-center justify-start gap-3"
          href="https://www.linkedin.com/in/HenriqueBacarin/"
          target="_blank"
        >
          <div className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center">
            <BsLinkedin />
          </div>
          <p className="hover:text-gray-500 duration-200 flex gap-2 items-center">
            Henrique Bacarin <BsFillArrowUpRightSquareFill />
          </p>
        </a>

        <a
          className="flex items-center justify-start gap-3"
          href="https://wa.me/5515988300473"
          target="_blank"
        >
          <div className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center">
            <BsWhatsapp />
          </div>
          <p className="hover:text-gray-500 duration-200 flex gap-2 items-center">
            (15) 98830-0473 <BsFillArrowUpRightSquareFill />
          </p>
        </a>

        <a
          className="flex items-center justify-start gap-3"
          href="mailto:henriquebacarin@gmail.com"
          target="_blank"
        >
          <div className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center">
            <BsFillEnvelopeFill />
          </div>
          <p className="hover:text-gray-500 duration-200 flex gap-2 items-center">
            henriquebacarin@gmail.com <BsFillArrowUpRightSquareFill />
          </p>
        </a>

        <a
          className="flex items-center justify-start gap-3"
          href="https://github.com/Bacarinx"
          target="_blank"
        >
          <div className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center">
            <BsGithub />
          </div>
          <p className="hover:text-gray-500 duration-200 flex gap-2 items-center">
            Bacarinx <BsFillArrowUpRightSquareFill />
          </p>
        </a>
      </div>
    </footer>
  )
}
