import './footer.css'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Tushar Vaniya</a>
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tusharvan01/" target='_blank' rel="noreferrer"><AiOutlineLinkedin/></a>
        <a href="https://www.instagram.com/tushar_.vaniya07/" target='_blank' rel="noreferrer"><FaInstagram/></a>
        <a href="https://x.com/TusharVaniya7" target='_blank' rel="noreferrer"><FaXTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tushar Vaniya. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer