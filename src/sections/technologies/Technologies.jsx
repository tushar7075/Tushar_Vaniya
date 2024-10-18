import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { LuBadgeCheck } from "react-icons/lu";

import './technologies.css'

function Technologies() {
  return (
    <section id="technologies">
      <h2>Technologies</h2>
      <div className="container technologies__container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="technologies__content">
            <article className='technologies__details'>
              <FaHtml5 className='technologies__icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <FaCss3 className='technologies__icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <IoLogoJavascript className='technologies__icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <FaBootstrap className='technologies__icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <RiReactjsFill className='technologies__icon'/>
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend">
        <h3>Backend Development</h3>
          <div className="technologies__content">
            <article className='technologies__details'>
              <FaNodeJs className='technologies__icon'/>
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiMongodb className='technologies__icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiMysql className='technologies__icon'/>
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiExpress className='technologies__icon'/>
              <div>
              <h4>Express JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiSpringboot className='technologies__icon'/>
              <div>
              <h4>Springboot</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="others">
        <h3>Others</h3>
        <div className="technologies__content">
            <article className='technologies__details'>
              <LuBadgeCheck className='technologies__icon'/>
              <div>
              <h4>UiPath</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <LuBadgeCheck className='technologies__icon'/>
              <div>
              <h4>C++</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <LuBadgeCheck className='technologies__icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='technologies__details'>
              <LuBadgeCheck className='technologies__icon'/>
              <div>
              <h4>DSA</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <LuBadgeCheck className='technologies__icon'/>
              <div>
              <h4>OS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <LuBadgeCheck className='technologies__icon'/>
              <div>
              <h4>OOPS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
        </div>    
        </div>
      </div>
    </section>
  )
}

export default Technologies