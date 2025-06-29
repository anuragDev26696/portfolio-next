'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiCloudDownload, BiEnvelope } from 'react-icons/bi';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export default function Hero() {
  const links = [
    { href: "https://github.com/anuragDev26696", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/anurag-kumar-verma-39a704189", icon: <FaLinkedinIn />, label: "LinkedIn" },
    { href: "https://x.com/Anuragk74826895", icon: <FaXTwitter />, label: "Twitter" },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-12 bg-background text-foreground">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Avatar Image */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center lg:order-1">
          <span className="overflow-hidden w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-120 lg:h-120 relative">
            <Image src="/main_cover_2.gif" alt="Anurag Kumar Verma" fill className="object-cover" priority />
          </span>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center lg:text-start">
            Hi, I&apos;m <span className="text-primary">Anurag Kumar Verma</span>
          </h1>
          <p className='text-indigo-500 dark:text-gray-400 text-xl lg:text-2xl font-semibold text-center lg:text-start'>Software Engineer</p>
          <p className="mt-3 text-center max-w-3xl lg:text-start text-balance text-muted-foreground opacity-75">
            A passionate Frontend Developer specializing in building responsive, high-quality applications with Angular, React, and Flutter.
          </p>
          <p className='flex gap-4 justify-center lg:justify-start text-2xl text-gray-600 dark:text-gray-400 mt-6'>
            {links.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label+' profile'} aria-label={link.label} className="dark:hover:text-gray-200 hover:text-indigo-600">{link.icon}</a>
            ))}
          </p>
          <p className="items-center lg:items-start flex gap-3">
            <a href="mailto:anuragkumar26696@gmail.com" title='Send a Mail' className='border-2 rounded-full px-3 py-2 ms-auto lg:ms-0 dark:border-indigo-100 dark:bg-indigo-100 border-indigo-500 bg-indigo-600 text-white dark:text-indigo-500 dark:hover:bg-gray-300 dark:hover:border-gray-300 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white dark:hover:text-black transition-all flex gap-2 items-center'><BiEnvelope /> Get in touch</a>
            <a href="/Anurag_resume.pdf" download={'/Anurag_resume.pdf'} title='Download CV' className='border-2 rounded-full px-3 py-2 me-auto dark:border-indigo-200 dark:text-indigo-200 dark:hover:bg-gray-300 dark:hover:border-gray-300 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white dark:hover:text-black transition-all flex items-center gap-2'><BiCloudDownload/> Download CV</a>
          </p>
        </motion.div>
      </div>
    </section>
    // <motion.section
    //   initial={{ opacity: 0, y: 60 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.7 }}
    //   className="max-w-3xl text-center sm:text-left text-balance p-4"
    // >
    //   <Image src="/profile.jpg" width={80} height={80} className="rounded-full mx-auto sm:mx-0 mb-6 object-cover aspect-square" alt="Anurag Kumar Verma" />
    //   <h1 className="text-4xl font-bold leading-tight">
    //     Hi I&apos;m <span className="text-primary">Anurag</span>, Frontend Developer
    //   </h1>
    //   <p className="mt-4 text-gray-600 dark:text-gray-400">
    //     I&apos;m a frontend developer with 3+ years of experience crafting beautiful and responsive interfaces. Skilled in Angular, React, and modern web technologies.
    //   </p>
    //   <button className="mt-6 px-5 py-2 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition">
    //     Get in touch
    //   </button>
    // </motion.section>
  );
}
