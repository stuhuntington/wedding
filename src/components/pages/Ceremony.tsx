import React from 'react';
import styles from '../Section.module.css';
import southwoldImage from '../../assets/southwold.jpg';


const CeremonySection = () => {
  return (
    <div className={styles.twoCol}>
      <div className={styles.pagePart1}>
        <h1 className={styles.sectionTitle}>Ceremony</h1>
        <ul className={styles.sectionList}>
          <li className={styles.listItemHeading}>1:00 <span>PM</span></li>
          <li>St Mary's Church</li>
          <li>Titchwell</li>
          <li>PE31 8BA</li>
          <li>Norfolk</li>
        </ul>
        <a className={styles.externalLink} href="https://maps.app.goo.gl/d5VbuJbBQ3ui636GA" rel="noreferrer" target="_blank">Map</a>
      </div>
      <div className={styles.pagePart2}>
        <img className={styles.pageImage} src={southwoldImage} alt="southwold beach"/>
      </div>
    </div>
  );
};

export default CeremonySection;
