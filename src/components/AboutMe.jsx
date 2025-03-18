import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "../AboutMe.module.css";

function AboutMe() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.leftColumn}>
                <div className={styles.aboutSection}>
                    <h2>Hello! I'm Sai Venkata Rao, Kora</h2>
                    <p className={styles.aboutDescription}>
                        A passionate Full Stack Developer with experience in building scalable web applications. 
                        My journey in tech started with a fascination for how things work, leading me to pursue a Master's in Computer Science. 
                        I'm always eager to learn and experiment with new technologies.
                    </p>
                </div>

                <div className={styles.hobbiesSection}>
                    <h2>Hobbies</h2>
                    <ul className={styles.hobbiesList}>
                        <li>Cooking</li>
                        <li>Watching Series</li>
                        <li>Playing Cricket</li>
                        <li>Building Personal Projects</li>
                    </ul>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.skillsSection}>
                    <h2>Technical Skills</h2>
                    <ul className={styles.skillsList}>
                        <li>Languages: HTML, CSS, JavaScript, Java, Python, MySQL</li>
                        <li>Frameworks & Tools: React.js, Bootstrap, Spring Boot, Hibernate, AWS,Jenkins, Git, Jira</li>
                        <li>Databases: SQL, PostgreSQL, Mongo DB</li>
                        <li>Design & Methodologies: Agile (Scrum), CI/CD</li>
                    </ul>
                </div>

                <div className={styles.certificationsSection}>
                    <h2>Certifications</h2>
                    <ul className={styles.certificationsList}>
                        <li>AWS Certified Developer - Associate</li>
                        {/*<li>
                          <a href="" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
                            AWS Certified Developer – Associate <FaExternalLinkAlt className={styles.externalLinkIcon} />
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
                            Certified Frontend Developer-FreeCodeCamp <FaExternalLinkAlt className={styles.externalLinkIcon} />
                          </a>
                        </li>*/}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
