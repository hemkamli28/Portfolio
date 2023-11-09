"use client";
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import styles from '../styles/navbar.module.css'

import About from '@/components/About';
import Contact from '@/components/Contact';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';

export default function Home() {

  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.navbarflex}>
        <div className={styles.navbarItems}>
          <ul className={styles.navLink}>
          <li>
              <ScrollLink
              className={styles.navLink}
                activeClass="active"
                to="projects-section"
                spy
                smooth
                offset={-50}
                duration={800}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                className={styles.navLink}
                to="skills-section"
                spy
                smooth
                offset={-50}
                duration={800}
              >
                Skills
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className={styles.logoDiv}>
          <Link className="navbar-brand" href="/">
            <Image src="/logo.png" alt="a" height={60} width={70} />
          </Link>
          
        </div>
        <div>
         
          <ScrollLink
                activeClass="active"
                className={styles.navLink}
                to="contact-section"
                spy
                smooth
                offset={-50}
                duration={800}
              >
                 <button className={styles.button}><span>Contact  </span></button>
              </ScrollLink>
        </div>
      </div>
      <Hero />
   
      <Element name="skills-section">
        <Skills />
      </Element>
      <Element name="projects-section">
        <Projects />
      </Element>
      <About />
      <Element name="contact-section">
      <Contact />
      </Element>
    </>
  )
}
