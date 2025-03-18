import React from "react";
import styles from '../PersonalPortfolio.module.css';
import profilePicture from '../assets/SaiVenkataRao.jpg';
import resumeFile from '../assets/Sai_Venkata_Rao-Resume.pdf';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextColumn}>
          <div className={styles.headerText}>
            <div className={styles.headingAndSubheading}>
              <h1 className={styles.heading}>
                <span className={styles.name}>Sai Venkata Rao, Kora</span>
              </h1>
              <p className={styles.introText}>
                Web Developer at UCF
              </p>
            </div>
            <a href={resumeFile} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <span className={styles.ctaText}>View my Resume</span>
            </a>
          </div>
        </div>
        <div className={styles.heroImageColumn}>
          <div className={styles.imageAndIcons}>
            <img 
              loading="lazy" 
              src={profilePicture}
              className={styles.heroImage} 
              alt="Portrait of Sai Krishna" 
            />
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/in/sai-venkat-rao-k-0256a71a7/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              {/*<a href="" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>*/}
              <a href="mailto:saivenkat88832@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
