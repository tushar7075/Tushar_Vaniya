import { MdOutlineMail } from "react-icons/md";
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_zjvgtrc', 'template_lwtrmqk', form.current, {
        publicKey: 'G8DUO6yrasju1Byh8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <div>
            <MdOutlineMail className="contact__option-icon"/>
            </div>
            <h4>Email</h4>
            <h5>tusharvaniya07@gmail.com</h5>
            <a href="mailto:tusharvaniya07@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact