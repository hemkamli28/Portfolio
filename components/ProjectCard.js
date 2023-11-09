"use client"
import React from 'react'
import styles from '@/styles/project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai';
const ProjectCard = ({ image, projectName, projectDeatils, projectTech, projectTech2, projectTech3, projectDesc, githubLink }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={`card ${styles.front}`} style={{ width: "18rem" }}>
                        <Image className={styles.projectImage} alt='image' src={`/${image}.png`} height={145} width={260} unoptimized={true} />
                        <div className="d-flex justify-content-start flex-column card-body">
                            <h5 className={styles.cardTitle}>{projectName}</h5>
                            <p className={styles.cardDesc}>{projectDeatils}</p>
                            <div className="d-flex justify-content-start card-text mt-2">
                                <p className={styles.techName1}>{projectTech}</p>
                                <p className={styles.techName2}>{projectTech2}</p>
                                <p className={styles.techName3}>{projectTech3}</p>

                            </div>
                        </div>
                    </div>
                    <div className={styles.back}>
                            <div><Link className={styles.githubLink} href={`${githubLink}`} target='blank' ><AiFillGithub /></Link></div>
                            <p className={styles.projectDesc}>{projectDesc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard