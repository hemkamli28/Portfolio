"use client";
import React from 'react';
import styles from '@/styles/About.module.css';
import Image from 'next/image';

const About = () => {
    
    return (
        <>
            <section className={styles.aboutSection}>
                <h3 className={styles.aboutTitle}>About</h3>

                <div className='d-flex justify-content-between mt-5 flex-wrap'>
                    <div className='w-25'>
                        <Image className={styles.aboutImage} src="/aboutus.svg" alt="a" height={10} width={10} />

                    </div>
                    <div className={styles.aboutData}>
                    {/* eslint-disable-next-line */}
                        <p className={styles.aboutParagraph}>My self Hem Kamli, a passionate and versatile web developer eager to kickstart my career in web development. Despite being a fresher, I have a strong foundation in various technologies and frameworks, including React, Node.js, Next.js, and more. My expertise extends to crafting responsive, user-friendly websites with a focus on SEO optimization.</p>
                       {/* eslint-disable-next-line */}
                        <p className={styles.aboutParagraph}>A key aspect of my skill set is my ability to create secure and well-protected backends for web applications. I'm driven, hardworking, and possess excellent listening skills, making me a quick learner who's motivated and maintains a positive outlook. My approach to web development is characterized by adaptability and a commitment to delivering high-quality results. I'm excited to be part of a dynamic community and eager to contribute to innovative projects.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About