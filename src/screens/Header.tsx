'use client'

import { useState } from 'react'

import { Roboto_Mono } from '@next/font/google'
import ThemeMode from '@/components/ThemeMode'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Header() {
  const [navbar, setNavbar] = useState(false)

  return (
    <header id="home" className={`bg-slate-900 text-white md:px-[10%]`}>
      <nav
        className={`flex justify-around md:justify-between py-6 items-center`}
      >
        <a
          href="#home"
          className={`text-3xl font-bold ${robotoMono.className}`}
        >
          Bacarin.Dev
        </a>
        <div className="md:hidden">
          <button
            className="p-2 text-white rounded-md outline-none "
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`flex pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className="items-center justify-start space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white">
              <a href="#home">Home</a>
            </li>
            <li className="text-white">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="text-white">
              <a href="#projetos">Projetos</a>
            </li>
            <li className="text-white">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
        <ThemeMode />
      </nav>
    </header>
  )
}
