"use client";
import React from 'react'
import styles from '@/styles/project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ProjectCard from './ProjectCard'
const Projects = () => {
    return (
        <>
            <h3 className={styles.projectsTitle}>Projects</h3>
            <div className={`d-flex flex-wrap justify-content-evenly mt-5 ${styles.projectsSection}`}>
               
                <ProjectCard 
                    image = "inotbook" 
                    projectName = "iNoteBook" 
                    projectDeatils = "An online cloud platform where you can manage your notes securely."
                    projectTech = "#NodeJS"
                    projectTech2 = "#JWT"
                    projectTech3 = "#MongoDB"
                    projectDesc = "Cultivate organized thoughts with this online cloud platform, where you securely manage your notes. Create, edit, and delete notes with confidence, fortified by hashed password protection and the assurance of JWT token session storage. Your data remains private, and your experience is seamless, ready to accompany you wherever you go." 
                    githubLink = "https://www.lipsum.com/"
                />
                 <ProjectCard 
                    image = "dealogram" 
                    projectName = "Deal-O-Gram" 
                    projectDeatils = "Your Ultimate Gateway to Jaw Dropping Amazon Deals!"
                    projectTech = "#NextJS"
                    projectTech3 = "#MongoDB"
                    projectDesc = "Designed and build with Next.js, MongoDB and more, Ensuring secure notifications and private interactions this affiliate marketing project provides real-time notifications for product requests, daily discounts, and seamless cross-device experiences. An innovative solution for affiliate marketing success." 
                    githubLink = "https://www.lipsum.com/"
                />
                <ProjectCard 
                    image = "njoyflix" 
                    projectName = "NJoyFlix" 
                    projectDeatils = "Explore cinema's hidden gems and blockbusters with njoyflix movies at your fingertips."
                    projectTech = "#React"
                    projectTech2 = "#RapidAPI"
                    projectDesc = "Discover the cinematic world with our responsive movie exploration site, powered by Rapid API. Explore top-rated films and hidden gems, where each movie reveals its rating, cast and brief description. It also offers a seamless and enriched user experience." 
                    githubLink = "https://www.lipsum.com/"
                />
                <ProjectCard 
                    image = "promptius" 
                    projectName = "Promptius" 
                    projectDeatils = "An open-source platform for modern world to discover & share creative prompts." 
                    projectTech = "#NextJS"
                    projectTech2 = "#Oauth"
                    projectTech3 = "#MongoDB"
                    projectDesc="Experience an open-source haven where AI-powered prompts are discovered and shared. Our platform prioritizes security with Google authentication for faster access. Find your creative spark with username and tag-based prompt searches, ensuring a safe and inspiring space for users."
                    githubLink = "https://www.lipsum.com/"
                />

            </div>
        </>
    )
}

export default Projects