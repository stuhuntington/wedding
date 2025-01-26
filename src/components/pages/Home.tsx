import React from 'react';
import styles from '../Section.module.css';

const HomeSection = () => {
  return (
    <div>
      <h2 className={styles.sectionSubtitle}>We're getting married!</h2>
      <h1 className={styles.homeTitle}>Stu & Sarah</h1>
      <h3 className={styles.sectionSubtitle}>23rd August 2025</h3>
    </div>
  );
};

export default HomeSection;
