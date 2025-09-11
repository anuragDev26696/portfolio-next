'use client';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = [
    { href: "https://github.com/anuragDev26696", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/anuragDev26696", icon: <FaLinkedinIn />, label: "LinkedIn" },
    { href: "https://x.com/Anuragk74826895", icon: <FaXTwitter />, label: "Twitter" },
  ];
  return (
    <footer className="py-6 text-center dark:text-gray-400 text-gray-600">
      <p className="flex gap-4 max-w-7xl mx-auto text-lg px-6 sm:px-12">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="hover:text-primary"
          >
            {link.icon}
          </a>
        ))}
      </p>
      <small>&copy; {new Date().getFullYear()} Anurag Kumar Verma — Built with Next.js & Tailwind CSS.</small>
    </footer>
  );
}
