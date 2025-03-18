import React from "react";
import styles from '../PersonalPortfolio.module.css';
import TopNav from './TopNav';
import HeroSection from './HeroSection';
import highradiuslogo from '../assets/highradius-white-logo.png';
import ucfLogo from '../assets/ucf-logo.png';

function PersonalPortfolio() {
  return (
    <div className={styles.personalPortfolioTemplate}>
      <main className={styles.mainContent}>
        <TopNav />
        <HeroSection />
        <h2 className={styles.workedWith}>Worked with</h2>
        <div className={styles.clientLogosContainer}>
          
          <div className={styles.ucfLogoWrapper}>
            <a href="https://www.ucf.edu" target="_blank" rel="noopener noreferrer">
              <img src={ucfLogo} className={styles.clientLogo} alt="UCF Logo" />
            </a>
          </div>
          <div className={styles.freshworksLogoWrapper}>
            <a href="https://www.highradius.com" target="_blank" rel="noopener noreferrer">
              <img src={highradiuslogo} className={styles.clientLogo} alt="Freshworks Logo" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PersonalPortfolio;
