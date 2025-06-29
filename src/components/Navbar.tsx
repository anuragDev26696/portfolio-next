'use client';
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { useEffect } from 'react'

// export default function Navbar() {
//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
//       <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
//         <span className="font-bold text-xl">Anurag Kumar Verma</span>
//         <div className="space-x-4">
//           {['About', 'Experience', 'Projects', 'Contact'].map((section) => (
//             <Link key={section} href={`#${section.toLowerCase()}`} className="hover:text-blue-500">
//               {section}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isTab, setTab] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev)

  useEffect(() => {
    const handleResize = () => setTab(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = (
    <>
      <Link href="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</Link>
      <Link href="#projects" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Projects</Link>
      <Link href="#resume" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Resume</Link>
    </>
  )

  const socials = (
    <>
      <a href="https://github.com/anuragDev26696" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://linkedin.com/in/anurag-kumar-verma-39a704189" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume"><FaFileAlt /></a>
    </>
  )

  return (
    <div className='px-6 sm:px-12 py-4 bg-white dark:bg-black z-50 w-full fixed top-0 shadow-md'>
      <header className="w-full max-w-7xl flex justify-between items-center mx-auto">
        <Link href="/" className="text-xl font-bold">anurag</Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks}
          <div className="flex gap-3 text-lg">{socials}</div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        {isTab && (
          <button className="text-2xl focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">{menuOpen ? '✕' : '☰'}</button>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 w-full bg-white dark:bg-black border-t dark:border-white/10 border-black/10 px-6 py-4 flex flex-col gap-4 text-sm md:hidden"
            >
              {navLinks}
              <div className="flex gap-4 text-lg">{socials}</div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  )
}
