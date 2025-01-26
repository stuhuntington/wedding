import React from 'react';
import styles from '../Section.module.css';
import greeceImage from '../../assets/greece-chicken.jpg';


const AcommodationSection = () => {
  return (
    <div className={styles.twoCol}>
      <div className={styles.pagePart1}>
        <h1 className={styles.sectionTitle}>Accommodation</h1>
        <p className={styles.pageText}>Accommodation is available at Titchwell, please contact us to enquire</p>
        <p className={styles.pageText}>Alternatively there are a few other options nearby...</p>
        <ul className={styles.sectionList}>
          <li>Briarfields Hotel, Titchwell - <a href="https://www.briarfieldshotelnorfolk.co.uk" target="_blank" rel="noreferrer">link</a></li>
          <li>The Orange Tree, Thornham - <a href="https://theorangetreethornham.co.uk">link</a></li>
          <li>The Ship Hotel, Brancaster - <a href="https://shiphotelnorfolk.co.uk">link</a></li>
          <li>The White Horse, Brancaster - <a href="https://www.whitehorsebrancaster.co.uk">link</a></li>
        </ul>
      </div>
      <div className={styles.pagePart2}>
        <img className={styles.pageImage} src={greeceImage} alt="Greek restaurant"/>
      </div>
    </div>
  );
};

export default AcommodationSection;
