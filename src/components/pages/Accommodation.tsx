import React from 'react';
import styles from '../Section.module.css';
import greeceImage from '../../assets/greece-chicken.jpg';


const AcommodationSection = () => {
  return (
    <div className={styles.twoCol}>
      <div className={styles.pagePart1}>
        <h1 className={styles.sectionTitle}>Accommodation</h1>
        {/* <p className={styles.pageText}>Accommodation is available at Titchwell, please contact us to enquire</p> */}
        {/* <p className={styles.pageText}>For your convenience we have reserved all the rooms at Titchwell Manor at a special rate for the evening of our wedding. We warmly invite you to join us as guests and stay overnight to celebrate together. To secure your room, or enquire about details, please contact us directly.</p> */}
        <p className={styles.pageText}>We have been blessed with so many friends and family wishing to celebrate with us and stay overnight. As such, all the rooms at Titchwell have now been allocated.</p>
        <p className={styles.pageText}>However there are a few other options nearby, including Briarfields hotel which is just a 3min walk away...</p>
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
