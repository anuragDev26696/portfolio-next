import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  const techs = ["Angular", "React", "Flutter", "Tailwind", "TypeScript", "Node.js", "MongoDB", "Ionic", "JavaScript", "Next.js", "HTML", "CSS", "Git", "Firebase", "Ionic", "Node.js", "Express.js", "REST APIs", "RxJS", "Bootstrap", "EJS"];
  return (
    <>
      <Head>
        <title>Anurag Kumar Verma | Frontend Developer</title>
        {/* <meta name="description" content="Anurag Kumar Verma - Frontend Developer with 3+ years of experience building modern web applications." /> */}
      </Head>
      {/* <Navbar/> */}
      <main>
        {/*  className="grid grid-rows-[auto_auto_auto] min-h-screen p-8 pb-20 gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)]" */}
        <Hero />
        <motion.section key="tech" initial={{opacity:0}} whileInView={{opacity: 1}} transition={{delay: 0.5}} className="py-16 px-6 sm:px-12">
          <h2 className="text-3xl font-bold mb-8 max-w-7xl mx-auto">Technologies</h2>
          <div className="flex flex-wrap gap-4 max-w-7xl mx-auto">
            {techs.map((tech, index) => (
              <span key={`tech_${index}`} className="px-4 py-2 border border-gray-100 dark:border-gray-900 text-gray-600 dark:text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-[#222] transition text-sm">{tech}</span>
            ))}
          </div>
        </motion.section>
        <Experience />
        <Projects />
      </main>
      <Footer/>
    </>
  );
}
