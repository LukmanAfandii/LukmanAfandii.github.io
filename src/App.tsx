import * as React from 'react'

// 1. import `ChakraProvider` component
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import CardImage from './components/CardImage';
import CardFloatText from './components/CardFloatText';
import { AnimatePresence, motion } from "framer-motion"


function App() {
  const constraintsRef = React.useRef(null)

  return (
    <div >
      <Navbar toggleTheme={() => { }} />
      <main className="overflow-hidden dark:bg-[#101926]">
        <Section id='home' className='h-[100vh - 70px] py-9 mt-0 md:mt-[-56px]'>
          <div className="order-2 w-full md:w-2/4 md:order-1">
            <div className="md:max-w-[30rem] max-w-[13rem] text-center md:text-left mx-auto md:mx-0">
              <h1 className="text-3xl font-semibold text-gray-800  dark:text-[#FFFFFF] md:text-6xl md:mt-0 mt-7">Hi! I Am Lukman Afandi</h1>
              <p className="mt-5 text-sm font-normal md:text-2xl md:mt-10">Freelance Web Developer based in Probolinggo, Indonesia</p>
              <a href='#find-me' className="grid content-center md:mt-10 mt-5 mx-auto md:mx-0  h-11 w-40 rounded-lg bg-[#8CB893] text-center text-base font-semibold text-white hover:bg-[#719A78] dark:bg-[#55E6A5] dark:text-[#101926]">
                <span>Contact Me</span>
              </a>
            </div>
          </div>
          <div className="relative order-1 w-full md:w-2/4 md:order-2">
            <div className="mx-auto w-44 h-64 md:w-72 md:h-96 after:-z-10  rounded-full bg-[#405744] bg-opacity-10 relative">
              <div className="w-full h-full overflow-hidden rounded-full">
                <motion.div
                  initial={{ translateY: 200 }}
                  animate={{ translateY: 0 }}
                  transition={{
                    duration: 1,
                    ease: "linear"
                  }}
                  ref={constraintsRef}>
                  <motion.div
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <img src="/assets/Lukman Afandi.png" alt="" srcSet="" className="h-64 pointer-events-none object-contain w-full dark:bg-[#55E6A5]" />
                  </motion.div>
                </motion.div>
              </div>
              <img src="/assets/figma-logo.png" alt="" srcSet="" className="absolute right-0 z-50 md:h-auto h-11 animate-bounce bottom-3/4 animation-delay-2000" />
              <img src="/assets/react-logo.png" alt="" srcSet="" className="absolute right-0 z-50 animate-bounce md:h-auto h-11 top-3/4 animation-delay-3000" />
              <img src="/assets/vscode-logo.png" alt="" srcSet="" className="absolute z-50 h-16 translate-y-1/2 animate-bounce md:h-auto bottom-1/2 -left-10 animation-delay-4000" />

            </div>
            <div className="absolute inset-0 top-0 -z-10">

              <span className="absolute top-20 left-6 inline-block h-64 w-64 rounded-full bg-[#ff8e8e] mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></span>
              <span className="absolute top-40 -left-10 inline-block h-44 w-44 rounded-full bg-[#86fff7] mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></span>
              <span className="absolute top-20 right-6 inline-block h-64 w-64 rounded-full bg-[#edff75] mix-blend-multiply blur-2xl animate-blob animation-delay-3000"></span>
              <span className="absolute top-60 right-0 inline-block h-44 w-44 rounded-full bg-[#7d84ff] mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></span>
            </div>
          </div>

          <ul className='absolute space-y-5 list-inside right-6'>
            <li>
              <a href="mail:lukmanafandi10@gmail.com" target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                <img src="/assets/mail.svg" alt="" className='hidden w-6 h-6 transition-transform duration-500 ease-in-out md:inline opacity-70 hover:scale-150 dark:invert' />                
              </a>
            </li>
            <li>
              <a href="https://instagram.com/lukmanafandii" target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                <img src="/assets/instagram.svg" alt="" className='hidden w-6 h-6 transition-transform duration-500 ease-in-out md:inline opacity-70 hover:scale-150 dark:invert' />                
              </a>
            </li>
            <li>
              <a href="https://github.com/CodeVectorizer" target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                <img src="/assets/github.svg" alt="" className='hidden w-6 transition-transform duration-500 ease-in-out md:inline h-7 opacity-70 hover:scale-150 dark:invert' />                
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lukman-afandi-9a883b177/" target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                <img src="/assets/linkedin.svg" alt="" className='hidden w-6 h-6 transition-transform duration-500 ease-in-out md:inline opacity-70 hover:scale-150 dark:invert' />                
              </a>
            </li>
          </ul>
        </Section>

        <Section id='my-projects'>
          <h1 className="w-full text-3xl font-semibold md:text-6xl">My Projects</h1>
          <div className="flex flex-wrap items-center justify-around gap-5">
            <div className="md:w-2/5 w-full rounded-2xl bg-[#FFEBE0] dark:bg-opacity-100 bg-opacity-60 mt-9 relative overflow-hidden shadow-lg">
              <div className="absolute -left-[12%] -bottom-[12%] h-5/6 w-5/6  rounded-full  mix-blend-multiply filter blur-2xl bg-[#FFBCBC]"></div>
              <div className="relative p-6 pb-0 md:p-10">
                <h2 className="text-2xl font-medium dark:text-[#101926]">
                  BEM-KM Polije Website
                </h2>
                <CardImage src='/assets/bem-web-project.png' />
                <CardFloatText text='Laravel' bgColor='bg-red-600' />
                <CardFloatText text='Next JS' bgColor='bg-gray-600' />
              </div>
            </div>
            <div className="md:w-2/5 w-full rounded-2xl bg-[#E0FBFF] dark:bg-opacity-100 bg-opacity-60 mt-9 relative overflow-hidden shadow-lg">
              <div className="absolute -right-[12%] -bottom-[12%] h-5/6 w-5/6  rounded-full  mix-blend-multiply filter blur-2xl bg-[#A0A4FF]"></div>
              <div className="relative p-6 pb-0 md:p-10">
                <h2 className="text-2xl font-medium dark:text-[#101926]">
                  HMJTI Website
                </h2>
                <CardImage src='/assets/hmjti-web-project.png' />
                <CardFloatText text='Laravel' bgColor='bg-red-600' />
                <CardFloatText text='Bootstrap' bgColor='bg-indigo-600' />

              </div>
            </div>
            <div className="md:w-2/5 w-full rounded-2xl bg-[#E0FFE3] dark:bg-opacity-100 bg-opacity-60 mt-9 relative overflow-hidden shadow-lg">
              <div className="absolute -left-[12%] -bottom-[12%] h-5/6 w-5/6  rounded-full  mix-blend-multiply filter blur-2xl bg-[#8EFFBB]"></div>
              <div className="relative p-6 pb-0 md:p-10">
                <h2 className="text-2xl font-medium dark:text-[#101926]">
                  Explore Indonesia
                </h2>
                <CardImage src='/assets/explore-indonesia-project.png' />
                <CardFloatText text='Tailwind' bgColor='bg-teal-500' />
                <CardFloatText text='React' bgColor='bg-blue-500' />
              </div>
            </div>
          </div>
        </Section>
        <Section id='about-me' className='relative justify-around'>
          <div className="w-full mb-8 md:w-1/2 ">
            <h1 className="w-full text-3xl font-semibold md:text-6xl">About Me</h1>
            <p className="text-base text-justify md:text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>
          </div>
          <div className="w-full pr-5 mb-8 md:w-1/2">
            <hr className='w-2/3 mb-1 border-t-4 md:mb-5 border-t-gray-900' />
            <h1 className="w-full mb-2 text-3xl font-semibold md:text-5xl">Stacks</h1>
            <ul className='list-disc list-inside'>
              <li>React JS, Next JS, Typescript</li>
              <li>Laravel, Codeigniter</li>
              <li>Bootstrap, Tailwind</li>
              <li>MySQL, MongoDB</li>
              <li>Git, Github</li>
            </ul>
          </div>
          <div className="w-full pr-5 mb-8 md:w-1/2">
            <hr className='w-2/3 mb-1 border-t-4 md:mb-5 border-t-gray-900' />
            <h1 className="w-full mb-2 text-3xl font-semibold md:text-5xl">Activities</h1>
            <ul className='list-disc list-inside'>
              <li>Learning</li>
              <li>Coding</li>
              <li>Research About New Technology</li>
              <li>Sleeping</li>
            </ul>
          </div>
          <div className="w-full pr-5 mb-8 md:w-1/2">
            <hr className='w-2/3 mb-1 border-t-4 md:mb-5 border-t-gray-900' />
            <h1 className="w-full mb-2 text-3xl font-semibold md:text-5xl">Tools</h1>
            <ul className='list-disc list-inside'>
              <li>VS Code</li>
              <li>Postman</li>
              <li>DB Weaver</li>
              <li>Figma</li>
              <li>Slacks</li>
              <li>Chrome</li>
            </ul>
          </div>
          <div className="absolute inset-0 top-0 -z-10">
            <span className="absolute top-20 left-0 inline-block h-[564px] w-[564px] rounded-full bg-[#FFBCBC] bg-opacity-30 mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></span>
            {/* <span className="absolute bottom-0 left-0 inline-block h-[364px] w-[364px] rounded-full bg-[#F6FFBC] mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></span> */}
            <span className="absolute top-20 right-6 inline-block h-[364px] w-[364px] rounded-full bg-[#BCFFFB] bg-opacity-30 mix-blend-multiply blur-2xl animate-blob animation-delay-3000"></span>
            <span className="absolute top-60 right-0 inline-block h-[464px] w-[464px] rounded-full bg-[#7d84ff] bg-opacity-30 mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></span>
          </div>
        </Section>
        <Section id='find-me'>
          <h1 className="w-full mb-3 text-3xl font-semibold md:text-6xl">Find Me</h1>
          <ul className='space-y-2 list-inside'>
            <li>
              <a href="mail:lukmanafandi10@gmail.com" target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                <img src="/assets/mail.svg" alt="" className='inline w-6 h-6 dark:invert' />
                <span className='dark:text-white'>lukmanafandi10@gmail</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/lukmanafandii" target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                <img src="/assets/instagram.svg" alt="" className='inline w-6 h-6 dark:invert' />
                <span className='dark:text-white'>Lukmanafandii</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/CodeVectorizer" target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                <img src="/assets/github.svg" alt="" className='inline w-6 h-7 dark:invert' />
                <span className='dark:text-white'>Codevectorizer</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lukman-afandi-9a883b177/" target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                <img src="/assets/linkedin.svg" alt="" className='inline w-6 h-6 dark:invert' />
                <span className='dark:text-white'>Lukman Afandi</span>
              </a>
            </li>
          </ul>
        </Section>
        <Section className='pb-4'>
          <p className='w-full text-center'>2022 Codevector Made by ♡</p>
        </Section>
      </main>
    </div>
  )
}

export default App;
