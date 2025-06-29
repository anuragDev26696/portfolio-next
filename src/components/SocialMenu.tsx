import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'

export default function SocialMenu() {
  return (
    <div className="flex gap-3 text-lg">
      <a href="https://github.com/anuragDev26696" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/anurag-kumar-verma-39a704189" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
        <FaFileAlt />
      </a>
    </div>
  )
}
// This component renders a social media menu with links to GitHub, LinkedIn, and a resume PDF.
// Each link opens in a new tab and has an aria-label for accessibility.