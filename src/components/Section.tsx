import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  classToApply: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, children, classToApply }, ref) => {
  return (
    <section id={id} ref={ref} className={clsx(styles.section, classToApply)}>
      {children}
    </section>
  );
});

export default Section;

