import React from "react";
import styles from "../Projects.module.css";
import project1Image from "../assets/Project1.png";
import project2Image from "../assets/Project2.png";

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectCard}>
        <img src={project1Image} alt="Foliar Script" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>AI‑Enabled FinTech B2B Invoice Management Application.</h3>
        <p className={styles.projectDescription}>
        This project was involved in creating a java full stack web‑based project powered with AI.
        </p>
        <a href="https://github.com/Venkatkora03/B2BInvoiceManagementApp" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          Git Hub
        </a>
      </div>

      <div className={styles.projectCard}>
        <img src={project2Image} alt="Foliar Script" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>University Website</h3>
        <p className={styles.projectDescription}>
        Designed and developed a full scale university website.
        </p>
        <a href="https://hospitality.ucf.edu/" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          View Website
        </a>
      </div>

     

    </div>
  );
}

export default Projects;
