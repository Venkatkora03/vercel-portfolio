import React from "react";
import styles from "../WorkExperience.module.css";

import ucfLogo from "../assets/ucf-logo.png";
import highradiuslogo from '../assets/highradius-white-logo.png';

function WorkExperience() {
  return (
    <div className={styles.timeline}>

      <div className={styles.timelineItem}>
        <div className={styles.ucfLogoWrapper}>
          <a href="https://www.ucf.edu/" target="_blank" rel="noopener noreferrer">
            <img src={ucfLogo} alt="UCF Logo" className={styles.ucfLogo} />
          </a>
          <p className={styles.location}>Orlando, FL</p>
        </div>
        <div className={styles.experienceDetails}>
          <h3 className={styles.jobTitle}>Web Developer</h3>
          <p className={styles.companyName}>University of Central Florida, June 2024 - Present</p>
          <p className={styles.jobDescription}>
            Developed and launched a full‑scale university website from scratch using HTML, CSS, JavaScript, Bootstrap, WordPress,
            React Js, enhancing user experience and accessibility.
          </p>
          <p className={styles.jobDescription}> 
            Utilized AWS Cloud for optimized website deployment and maintenance, ensuring high availability and seamless perfor‑
            mance.
          </p>
          <p className={styles.jobDescription}>
            Designed and developed React‑based projects on campus, collaborating with cross‑functional teams to deliver dynamic and
            responsive applications.
          </p>
          <p className={styles.jobDescription}>
            Implemented best practices in web development, focusing on scalability, performance, and mobile responsiveness.
          </p>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.freshworksLogoWrapper}>
          <a href="https://www.freshworks.com/" target="_blank" rel="noopener noreferrer">
            <img src={highradiuslogo} alt="Freshworks Logo" className={styles.freshworksLogo} />
          </a>
          <p className={styles.location}>Hyderabad, India</p>
        </div>
        <div className={styles.experienceDetails}>
          <h3 className={styles.jobTitle}>Associate Software Engineer</h3>
          <p className={styles.companyName}>Highradius, Jun 2022 - Jul 2023</p>
          <p className={styles.jobDescription}>
          Developed and maintained software applications using Java, spring, Hibernate resulting in improved efficiency and en‑
          hanced user experience. 
          </p>
          <p className={styles.jobDescription}>
          Developed CI/CD pipelines using Jenkins to automate build, test, and deployment processes, reducing deployment time by
          30%. 
          </p>
          <p className={styles.jobDescription}>
            Configured AWS CloudWatch for proactive monitoring and alerting, reducing downtime and improving system performance . 
          </p>
          <p className={styles.jobDescription}>
            Designed and implemented secure login functionality using OAuth2, enhancing user authentication and access control. 
          </p>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.freshworksLogoWrapper}>
          <a href="https://www.freshworks.com/" target="_blank" rel="noopener noreferrer">
            <img src={highradiuslogo} alt="Freshworks Logo" className={styles.freshworksLogo} />
          </a>
          <p className={styles.location}>Hyderabad, India</p>
        </div>
        <div className={styles.experienceDetails}>
          <h3 className={styles.jobTitle}>Technical Consulting Intern</h3>
          <p className={styles.companyName}>Highradius, Jul 2021 - Jun 2022</p>
          <p className={styles.jobDescription}>
          Participates in debugging and optimizing of an existing Java application, enhancing system performance by 10%.
          </p>
          <p className={styles.jobDescription}>
          Developed software tools to reduce manual effort in collecting the data using java, springBoot, hibernate. 
          </p>
          <p className={styles.jobDescription}>
          Engaged in weekly coding sprints, consistently meeting deadlines and contributing to a 5% overall increase in team produc‑
          tivity.
          </p>
          <p className={styles.jobDescription}>
          Implemented RESTful APIs to facilitate seamless communication between microservices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
