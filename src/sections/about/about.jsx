import AboutImage from '../../assets/tushar_1.jpg'
import CV from '../../assets/Tushar_Vaniya.pdf'
import { HiDownload } from "react-icons/hi";
import './about.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <p>Hey, Tushar here. I am a dedicated software developer with a solid foundation in Data Structures and Algorithms (DSA) and experience as a full stack web developer. Currently, I am keen to transition into Machine Learning (ML) and Artificial Intelligence (AI), driven by a passion for developing intelligent systems. I am a proactive learner, constantly seeking opportunities to expand my skills and contribute to innovative projects in the tech field.</p>
          <div className="CVbtn">
            <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About