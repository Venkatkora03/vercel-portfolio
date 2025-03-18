import React from "react";
import styles from '../Education.module.css';
import ucfLogo from '../assets/ucf-main-logo.png';
import srmlogo from '../assets/SRM_logo.png';

function Education() {
  return (
    <div className={styles.educationWrapper}>
      <div className={styles.educationContainer}>
        <div className={styles.educationItem}>
          <div className={styles.logoUcfWrapper}>
            <a href="https://www.ucf.edu/" target="_blank" rel="noopener noreferrer">
                <img src={ucfLogo} alt="UCF Logo" className={styles.logoUcf} />
            </a>
          </div>
          <div className={styles.universityDetails}>
            <h2 className={styles.universityName}>University of Central Florida, Orlando, Florida</h2>
            <p className={styles.details}><strong>Degree:</strong> Master of Science in Computer Science</p>
            <p className={styles.details}><strong>Graduation:</strong> April 2025</p>
            {/*<div className={styles.additionalInfo}>
              <p><strong>Coursework:</strong> Algorithms, Computer Architecture, Machine Learning, NLP</p>
              <p><strong>Clubs:</strong> Google Developers Community Club, Data Science Club, Badminton Club</p>
              <p><strong>Achievements:</strong> Dean's List, Hackathon Winner</p>
            </div>*/}
          </div>
        </div>
        <div className={styles.educationItem}>
          <div className={styles.logoSastraWrapper}>
            <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer">
                <img src={srmlogo} alt="SRM University Logo" className={styles.logoSastra} />
            </a>
          </div>
          <div className={styles.universityDetails}>
            <h2 className={styles.universityName}>SRM University, India</h2>
            <p className={styles.details}><strong>Degree:</strong> Bachelor of Technology</p>
            <p className={styles.details}><strong>Graduation:</strong> May 2022</p>
            {/*<div className={styles.additionalInfo}>
              <p><strong>Coursework:</strong> Data Strcutures, Computer Networks, Databases, Operating Systems</p>
              <p><strong>Clubs:</strong> Coding Club, Member of Corporate Relations(Daksh), Member of Telugu Lits(Kuruksastra)</p>
              <p><strong>Achievements:</strong> Business Idea Presentation Winner</p>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;