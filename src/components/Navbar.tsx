import { useState } from "react"

export const Navbar: React.FC = () => {
  // Navbar hidden state
  const [hiddenNav, setHiddenNav] = useState(true)
  // Toggle navbar hidden state
  const toggleHidden = () => {
    setHiddenNav(!hiddenNav);
  }
  return (
    <>
      <nav className="relative overflow-x-hidden">
        <div className="relative flex flex-wrap items-center justify-between mx-auto h-14 max-w-7xl px-9">
          <h3 className="text-2xl font-semibold">Codevector</h3>

          {/* Start Hamburger Menu Button */}
          <span className="block cursor-pointer md:hidden" onClick={() => toggleHidden()}>
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
          {/* End Hamburger Menu Button */}
        </div>

        {/* Start Mobile Menu */}
        <div className={`${hiddenNav ? "hidden" : "flex"} inset-x-0 top-14 flex-col py-2 shadow-sm md:hidden`}>
          <a href="" className="py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">Home</a>
          <a href="" className="py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">About Me</a>
          <a href="" className="py-2 mt-1 px-9 hover:bg-gray-50 hover:bg-opacity-40">My Projects</a>
          <button className="mx-9 mt-4 block h-11 rounded-lg bg-[#8CB893] text-center text-base font-semibold text-white hover:bg-[#719A78]">Contact Me</button>
        </div>
        {/* End Mobile Menu */}

      </nav>


      

    </>
  )
}

export default Navbar;