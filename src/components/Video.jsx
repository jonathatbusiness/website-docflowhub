import React from 'react';
import './Video.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Video = () => {
  return (
    <div className='container-all'>
        <header className="header">
        <div className="header-left">Jonatha Teixeira</div>
        <nav className="header-right">
          <a href="#about">About me</a>
          <a href="#contact">Contact me</a>
        </nav>
      </header>
    <div className="video-container">
      

      <section className="hero">
        <h1>Great to see you want to know more about my project and skills!</h1>
        <p>Watch the video below and learn more about this project.</p>
      </section>

      <div className="video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/G-6g7QfIFXA?si=YnfVTBasNFve4mCj" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <section id="about" className="about-me">
        <h2>About me</h2>
        <p>
          I am a full-stack developer with experience in technologies like React, Node.js, and SQL/NoSQL databases. I have a strong interest in creating scalable and efficient solutions that meet user needs.
        </p>
        <p>
          Additionally, I possess project management and teamwork skills, allowing me to collaborate effectively in agile environments. I am always eager to learn new technologies and improve my skills to deliver high-quality projects.
        </p>
      </section>

      <section id="contact" className="contact-me">
        <h2>Contact me</h2>
        <div className="contact-cards">
          <a href="mailto:jonatha.teixeira.busines@gmail.com" className="contact-card-b">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p>Email</p>
            <p className='mail-font'>jonatha.teixeira.busines@gmail.com</p>
          </a>
          <a href="tel:+5535984529241" className="contact-card">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>Phone</p>
            <p>+55 35 98452-9241</p>
          </a>
          <a href="https://www.linkedin.com/in/jonatha-l-teixeira-jlt/" className="contact-card" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <p>LinkedIn</p>
            <p>jonatha-l-teixeira-jlt</p>
          </a>
          <a href="https://github.com/jonathatbusiness" className="contact-card" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <p>GitHub</p>
            <p>jonathatbusiness</p>
          </a>
        </div>
      </section>

      
    </div><footer className="footer">
        <p>Jonatha Teixeira, 2025</p>
      </footer></div>
    
  );
}

export default Video;