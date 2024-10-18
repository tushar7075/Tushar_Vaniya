import { LuExternalLink } from "react-icons/lu";
import blog from '../../assets/blog.jpg'
import news from '../../assets/News.jpg'
import learn_now from '../../assets/Learn-Now.jpg'
import snake from '../../assets/snake.jpg'

import './project.css'
const Project=()=> {
  return(
    <section id="project">
      <h2>Projects</h2>
      <div className="container project__container">
        <article className='project__item'>
          <img className='project__item-image' src={blog} alt="" />
          <div className="project__item-layer">
            <h3>BlogUniverse</h3>
            <p>Responsive blogging app features user login, profile customization, and full CRUD functionality for posts.</p>
            <a href="https://github.com/tushar7075/BlogUniverse" target='_blank' rel="noreferrer"><LuExternalLink/></a>
          </div>
        </article>
        <article className='project__item'>
          <img src={news} alt="" className='project__item-image'/>
          <div className="project__item-layer">
            <h3>NewsDaily</h3>
            <p>A responsive news app with categorized sections, fetching daily updates using a news API.</p>
            <a href="https://github.com/tushar7075/NewsDaily" target='_blank' rel="noreferrer"><LuExternalLink/></a>
          </div>
        </article>
        <article className='project__item'>
          <img src={learn_now} alt="" className='project__item-image'/>
          <div className="project__item-layer">
            <h3>Learn-Now</h3>
            <p>An educational website designed for students, featuring an engaging and user-friendly interface.</p>
            <a href="https://github.com/tushar7075/Learn-Now" target='_blank' rel="noreferrer"><LuExternalLink/></a>
          </div>
        </article>
        <article className='project__item'>
            <img src={snake} alt="" className='project__item-image'/>
          <div className="project__item-layer">
            <h3>Snaker.io</h3>
            <p>Snake game where eating food increases length and touching edges ends the game.</p>
            <a href="https://github.com/tushar7075/snake_game" target='_blank' rel="noreferrer"><LuExternalLink/></a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project