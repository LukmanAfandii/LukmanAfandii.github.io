import { useEffect, useState } from "react"

type NavbarProps = {
  className?: string | ''
  toggleTheme: () => void
}
export const Navbar = ({ toggleTheme }: NavbarProps) => {

  // Navbar hidden state
  const [hiddenNav, setHiddenNav] = useState(true)

  const [isDarkMode, setIsDarkMode] = useState(
    window.localStorage.getItem("isDarkMode")
  );

  const [body, setBody]   = useState(document.body)

  useEffect(() => {
    // click outside navbar to hide and not sidebar
    const clickOutside = (e: any) => {
      if (e.target.closest("#sidebar") || e.target.closest("#btnSidebar")) {
        return;
      }
      setHiddenNav(true);
    }          

    
    // // set theme depends on localstorage
    // const theme = localStorage.getItem('theme')
    // if(theme === 'dark'){
    //   // setSwithTheme(true)
    //   body.classList.add('dark')
    // }else{
    //   // setSwithTheme(false)
    //   body.classList.remove('dark')
    // }
    // console.log('asdf');
    
    

    // add click event listener
    document.addEventListener("click", clickOutside);
    // remove click event listener
    return () => document.removeEventListener("click", clickOutside);
  }, [])

  useEffect(() => {
    if (window.localStorage.getItem("isDarkMode") !== "enable") {
      // document.getElementById("toggle-dark").checked = true;

      document.body.classList.add("dark");
    } else {
      // document.getElementById("toggle-dark").checked = false;
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const _toggleDarkMode = () => {
    // toggleTheme()
    // // toggle dark mode
    // if( window.localStorage.getItem('theme') === 'dark'){
    //   // window.localStorage.setItem('theme', 'light')
    //   setSwithTheme(true)
    // }else{
    //   setSwithTheme(false)
    //   // window.localStorage.setItem('theme', 'dark')
    // }

    if (isDarkMode == "enable") {
      window.localStorage.setItem("isDarkMode", "disable");
      setIsDarkMode("disable");
    } else {
      window.localStorage.setItem("isDarkMode", "enable");
      setIsDarkMode("enable");
    }

  }

  return (
    <>
      <nav className="dark:bg-[#101926] dark:text-white relative overflow-x-hidden" id="navbar">
        <div className="flex flex-wrap items-center justify-between mx-auto h-14 max-w-7xl px-9">
          <h3 className="text-2xl font-semibold">Codevector</h3>

      {/* Navbar */}
          <div className="items-center hidden space-x-4 md:flex ">
          <a href="#home" className="block py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">Home</a>
        <a href="#my-projects" className="block py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">My Projects</a>
        <a href="#about-me" className="block py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">About Me</a>
        </div>

          {/* Start Hamburger Menu Button */}
          <span id="btnSidebar" className="block cursor-pointer md:hidden" onClick={() => {
            setHiddenNav((prev) => !prev);
          }}>
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
          {/* End Hamburger Menu Button */}          

          {/* Switch Button Toggle Dark Mode*/}
          <div className="items-center hidden md:flex ">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>

            </span>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" onChange={_toggleDarkMode} />
                <div className="block h-8 dark:bg-[#55E6A5] bg-[#8CB893] rounded-full w-14"></div>
                <div className={`absolute w-6 h-6 transition bg-white dark:bg-[#101926] rounded-full dot top-1 ${isDarkMode == 'enable' ? 'left-1' : 'right-1'}`}></div>
              </div>
            </label>
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>

            </span>
          </div>
          {/* End Switch Button Toggle Dark Mode*/}
        </div>



      </nav>
      {/* Start Mobile Menu */}
      <div id="sidebar" className={` transition-all duration-500 dark:bg-[#0c131e] dark:text-white bg-gray-50 ease-in-out w-1/2 fixed z-[51] pt-14 inset-y-0 flex-col py-2 shadow-sm md:hidden ${hiddenNav ? "-left-96" : "left-0"}`}>
        <div className="flex flex-wrap items-center mb-10 text-2xl font-bold px-9">
          <span>Codevector</span>
          <div className="flex items-center w-full mt-4 md:hidden">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>

            </span>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" onChange={_toggleDarkMode} />
                <div className="block h-6 dark:bg-[#55E6A5] bg-[#8CB893] rounded-full w-10"></div>
                <div className={`absolute w-4 h-4 transition bg-white dark:bg-[#101926] rounded-full dot top-1 ${isDarkMode == 'enable'  ? 'left-1' : 'right-1'}`}></div>
              </div>
            </label>
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        <a href="" className="block py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">Home</a>
        <a href="" className="block py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">About Me</a>
        <a href="" className="block py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">My Projects</a>
        <button className="dark:bg-[#55E6A5] dark:text-[#101926] mx-9 mt-4 px-4 block h-11 rounded-lg bg-[#8CB893] text-center text-base font-semibold text-white hover:bg-[#719A78]">Contact Me</button>

      </div>
      {/* End Mobile Men} */}
    </>
  )
}

export default Navbar;