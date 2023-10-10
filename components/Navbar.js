"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/navbar.module.css'
import { BsCodeSlash } from "react-icons/bs";


const Navbar = () => {
    return (
        <>
            <div className={styles.navbarflex}>
                <div className={styles.navbarItems}>
                    <ul className={styles.navLink}>
                        <li className="">
                            <Link className={styles.navLink} aria-current="page" href="/">Projects</Link>
                        </li>
                        <li className="">
                            <Link className={styles.navLink} href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.logoDiv}>
                    <Link className="navbar-brand" href="/">
                        <Image className={styles.code} src="/logo.png" alt="a" height={60} width={70} />
                    </Link>
                </div>
                <div>
                    <button className={styles.button}><span>Contact  </span></button>

                </div>
            </div>

        </>
    )
}

export default Navbar