import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Home from './components/pages/Home';
import Venue from './components/pages/Venue';
import Rsvp from './components/pages/Rsvp';
import Ceremony from './components/pages/Ceremony';
import Accomodation from './components/pages/Accommodation';
import styles from './App.module.css';

const sections = [
  {
    name: 'home',
    component: Home,
    class: styles.homeSection,
  },
  {
    name: 'ceremony',
    component: Ceremony,
    class: styles.ceremonySection,
  },
  {
    name: 'venue',
    component: Venue,
    class: styles.venueSection,
  },
  {
    name: 'accommodation',
    component: Accomodation,
    class: styles.accomSection,
  },
  {
    name: 'RSVP',
    component: Rsvp,
    class: styles.rsvpSection,
  },
];

const sectionNames = sections.map((sec) => sec.name);

const App: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionNames.includes(hash)) {
      const index = sectionNames.indexOf(hash);
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleNavClick = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${sectionNames[index]}`);
  };

  return (
    <div>
      <Header sections={sectionNames} onNavClick={handleNavClick} />
      <main className={styles.main}>
        {sections.map((section, index) => (
          <Section
            key={section.name}
            id={section.name}
            ref={(el) => (sectionRefs.current[index] = el)}
            classToApply={section.class}
          >
            <section.component />
          </Section>
        ))}
      </main>
    </div>
  );
};

export default App;
