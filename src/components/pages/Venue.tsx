import React from 'react';
import styles from '../Section.module.css';
import sarahImage from '../../assets/sarah-titchwell.jpg';


const VenueSection = () => {
  return (
    <div className={styles.twoCol}>
      <div className={styles.pagePart2}>
        <img className={styles.pageImage} src={sarahImage} alt="Titchwell Manor"/>
      </div>
      <div className={styles.pagePart1}>
        <h1 className={styles.sectionTitle}>Venue</h1>
        <ul className={styles.sectionList}>
          <li>Titchwell Manor - <a href="https://titchwellmanor.com" target="_blank" rel="noreferrer">link</a></li>
          <li>Main road</li>
          <li>Titchwell</li>
          <li>PE31 8BB</li>
          <li>Norfolk</li>
        </ul>
        <a className={styles.externalLink} href="https://maps.app.goo.gl/pZMoXAf2U5pRUmD87" rel="noreferrer" target="_blank">Map</a>
      </div>
    </div>
  );
};

export default VenueSection;
