'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  // const items = [
  //   { role: 'Frontend Developer', company: 'Spundan, Indore', period: 'Nov 2021 - Present', details: 'Built 6+ Angular apps, led UI/UX enhancements, implemented REST APIs.' },
  // ];

  return (
    // <section id="experience" className="py-16 px-4">
    //   <div className="max-w-screen-lg mx-auto">
    //     <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
    //     <div className="space-y-8">
    //       {items.map((item, idx) => (
    //         <motion.div
    //           key={idx} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }}
    //           className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
    //         >
    //           <h3 className="text-xl font-semibold">{item.role} @ {item.company}</h3>
    //           <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.period}</p>
    //           <p className="text-gray-700 dark:text-gray-500">{item.details}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="px-6 sm:px-12 py-16" id="experience">
      <motion.div key={'exp_sec'} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1 * 0.2 }} className='max-w-7xl mx-auto'>
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <article className="flex gap-10 space-y-1">
          <span className='sr-only md:not-sr-only grid grid-rows-[10px_1fr]'><span className='w-2.5 h-2.5 mx-auto rounded-full bg-indigo-600'></span><span className='grow-1 mx-auto w-1 bg-gradient-to-b from-indigo-600 via-indigo-400 to-transparent'></span></span>
          <div className='bg-gradient-to-r dark:from-[#06060b] dark:to-[#06060b] from-[#f1f1f1] to-[#f1f1f1] p-4 md:p-6 rounded-lg'>
            <h3 className="text-xl font-semibold">Frontend Developer @ Spundan</h3>
            <p className="text-gray-700 dark:text-gray-400 italic">Nov 2021 - Present | Indore, India</p>
            <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>Led 6+ Angular projects for scalable enterprise solutions.</li>
              <li>Integrated REST APIs, secured apps, and improved UI/UX.</li>
              <li>Worked with Angular, React, Flutter, EJS, RxJS, Angular Material, Bootstrap, Tasilwind & SCSS.</li>
              <li>Participated in Agile teams and daily sprints.</li>
            </ul>
          </div>
        </article>
      </motion.div>
    </section>
  );
}
// This component displays a list of experiences with animations using Framer Motion.
// It uses a simple array of objects to represent each experience, which can be easily extended.