"use client";
import styles from '@/styles/page.module.css'
import Image from 'next/image'
import Techitem from './Techitem'
const Skiils = () => {
  const techIcons = [
    'html', 'css', 'js', 'node', 'mongodb', 'react', 'redux', 'bootstrap', 'figma', 'nextjs', 'git', 'docker'
  ]
  const techNames = [
    'HTML', 'CSS', 'JavaScript', 'Node JS', 'MongoDB', 'React JS', 'Redux', 'Bootstrap', 'Figma', 'Next JS', 'Git', 'Docker'
  ]
  return (
    <>
    <div className={styles.skillSection}>
      <h2 className={styles.SkillTitle} >Skills</h2>
      <section className={styles.skillDiv}>
        <div className={styles.techIcons}>
          {techIcons.map((icon, index) => (
            <Techitem key={icon} icon={icon} name={techNames[index]} />
          ))}
        </div>
        <div className={styles.skillContent}>
          <div>
            <div className={styles.skillData}>
              <h4>UI/UX Design</h4>
              <p>Turning Concepts into User-Friendly Designs with Figma, Userflow, Wireframes, and Prototypes</p>
            </div>
            <div className={styles.skillData}>
              <h4>Frontend Development</h4>
              <p>Transforming Ideas into Dynamic Web Solutions Using HTML, CSS, JS, React/Redux, Bootstrap, and Tailwind.</p>
            </div>
            <div className={styles.skillData}>
              <h4>Backend Development</h4>
              <p>Crafting Effortless Backend Solutions with Node/Express, Next.js, REST, and MongoDB.</p>
            </div>

          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Skiils