import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  sections: string[];
  onNavClick: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ sections, onNavClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavItemClick = (index: number) => {
    onNavClick(index);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>S&S<span>23.08.25</span></div>
      {isMobile ? (
        <>
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
            {sections.map((section, index) => (
              <button key={section} onClick={() => handleNavItemClick(index)}>
                {section}
              </button>
            ))}
          </nav>
        </>
      ) : (
        <nav className={styles.desktopNav}>
          {sections.map((section, index) => (
            <button key={section} onClick={() => handleNavItemClick(index)}>
              {section}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

