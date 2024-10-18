import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";

import HeaderImage from '../../assets/tushar_logo_pic.jpg'

import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h2>Tushar Vaniya</h2>
        <p>
          Software Developer
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#project" className="btn white">My Work</a>
        </div>
        <div className="header__socials">
          <a key={1} href="https://github.com/tushar7075" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></a>
          <a key={2} href="https://www.linkedin.com/in/tusharvan01/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin/></a>
          <a key={3} href="https://x.com/TusharVaniya7" target="_blank" rel="noopener noreferrer"><AiOutlineX/></a>
          <a key={4} href="https://www.instagram.com/tushar_.vaniya07/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a>
        </div>
      </div>
    </header>
  )
}

export default Header