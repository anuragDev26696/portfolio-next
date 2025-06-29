'use client';

import Link from "next/link";
import { BiBuildings, BiFolderOpen, BiGlobe, BiLogoPlayStore } from "react-icons/bi";
import projects from '@/data/projects.json';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    // <section id="projects" className="py-16 px-4">
    //   <div className="max-w-screen-lg mx-auto">
    //     <h2 className="text-3xl font-bold mb-8 text-center">Notable Projects</h2>
    //     <div className="grid sm:grid-cols-2 gap-y-2">
    //       {projects.map((proj, idx) => (
    //         (proj.link?.trim() !== '') ?
    //         <motion.a
    //           key={idx} href={proj.link} target="_blank" rel="noopener noreferrer"
    //           className="block p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
    //           initial={{ scale: 0.98 }} whileHover={{ scale: 1 }} transition={{ type: 'spring' }}
    //         >
    //           <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
    //           <p className="text-gray-600">{proj.desc}</p>
    //         </motion.a> :
    //         <motion.div key={idx} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition" initial={{ scale: 0.98 }} whileHover={{ scale: 1 }} transition={{ type: 'spring' }}>
    //             <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
    //             <p className="text-gray-600">{proj.desc}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="projects" className="py-16 px-6 sm:px-12">
      <h2 className="text-3xl font-bold mb-8 max-w-7xl mx-auto flex items-center gap-6">Projects
        {(projects?.length > 4) && <Link href={'/projects'} className="ms-auto font-normal text-sm text-indigo-500 dark:text-gray-400 hover:tracking-wide dark:hover:text-indigo-100 transition-all">View All</Link>}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-7xl mx-auto">
        {projects.slice(0,4).map((project, index) => (
          <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 * 0.2 }} key={'project_'+index} className="p-6 border dark:border-gray-800 border-[#f1f1f1] rounded-lg bg-[#f1f1f1] dark:bg-[#06060b] hover:ring-black/30 transition">
            <p className="mb-4 flex justify-between gap-4 items-center"><BiFolderOpen className="text-indigo-500 text-3xl lg:text-4xl" />
            {(project.webUrl && project.webUrl.trim() !== '') && <a href={project.webUrl} target="_blank" className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-white/90 inline-block mt-2"><BiGlobe className="md:text-2xl" /><span className="sr-only">Web Application</span></a>}
            {(project.mobileUrl && project.mobileUrl.trim() !== '') && <a href={project.mobileUrl} target="_blank" className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-white/90 inline-block mt-2"><BiLogoPlayStore className="md:text-2xl" /><span className="sr-only">Get Mobile App</span></a>}
            </p>
            <h3 className="flex flex-wrap mb-2 font-semibold"><span className="text-xl dark:text-gray-200">{project.title}</span> <span className="ps-4 text-xs dark:text-gray-400 flex gap-2 mt-auto italic"><BiBuildings/> {project.industry}</span></h3>
            <p className="text-sm text-muted-foreground mb-2 dark:text-gray-300">{project.description}</p>
            <p className="text-xs"><strong>Tech:</strong> <i className="text-muted">{project.tech.join(", ")}</i></p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
