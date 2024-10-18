import Logo from '../../assets/tushar_logo_pic_sm.jpg'
// import { MdSunny } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
// import { GiNightSleep } from "react-icons/gi";
import './navbar.css'
// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { LuProjector } from "react-icons/lu";
import {useState} from "react";
const NavBar = () => {
  // const [activeNav,setActiveNav]=useState('#')
  // const [day,setDay]=useState(true)
  const [isNavS,setIsNavS] = useState(window.innerWidth > 1024 ? true : false)
  
    const closeNavHandler = () =>{
      if(window.innerWidth < 1024){
          setIsNavS(false);

      }else{
          setIsNavS(true);
      }
    } 
  return (
        
        <nav>
          {/* <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><AiOutlineHome/></a>
          <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}><AiOutlineUser/></a>
          <a href="#technologies" onClick={()=>setActiveNav('#technologies')} className={activeNav === '#technologies'?'active':''}><BiBook/></a>
          <a href="#project" onClick={()=>setActiveNav('#project')} className={activeNav === '#project'?'active':''}><LuProjector/></a>
          <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><BiMessageSquareDetail/></a> */}
          <div className="container nav__container">
            <a href="index.html" className='nav__logo'>
                <img src={Logo} alt="Logo" />
            </a>
            {isNavS && <ul className='nav__menu'>
              <li key="1"><a href="#" onClick={closeNavHandler}>Home</a></li>
              <li key="2"><a href="#about" onClick={closeNavHandler}>About</a></li>
              <li key="3"><a href="#technologies" onClick={closeNavHandler}>Technologies</a></li>
              <li key="4"><a href="#project" onClick={closeNavHandler}>Projects</a></li>
              <li key="5"><a href="#contact" onClick={closeNavHandler}>Contact</a></li>
            </ul>
            }
            <button className="nav_toggle-btn" onClick={()=>setIsNavS(!isNavS)}>
                {!isNavS ? <FaBarsStaggered/>:<AiOutlineClose/>}
            </button>
        </div>
        </nav>
  )
}

export default NavBar