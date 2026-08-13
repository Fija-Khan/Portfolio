import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="nav-logo">
          Fija<span>.</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>

           <a href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </a>

          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>

        <div className="nav-social">
          <a href="https://github.com/Fija-Khan" aria-label="GitHub">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/fija-pathan-482a05221/" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </nav>
  )
}

export default Navbar