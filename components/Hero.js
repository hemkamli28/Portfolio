"use client";

import Image from "next/image";
import styles from '@/styles/page.module.css'

const Hero = () => {
    return (
        <>
            <div className={styles.heroSection}>
                <div className="d-flex justify-content-center w-50 ">
                    <Image className={styles.heroImage} src="/two.svg" alt="a" height={10} width={10} />
                </div>
                <div className="d-flex justify-content-center w-50">
                    <div className="w-100 mt-4">
                        <h2 className={styles.heroTitle}>Hello ,</h2>
                        {/* eslint-disable-next-line */}
                        <h2 className={styles.heroTitle}>I'm <span>Hem Kamli</span></h2>
                        <p className={styles.herosubheading}>a web developer with a gift for transforming complex ideas into elegant, user-friendly websites. With a focus on innovation and functionality, I am here to transform your sophisticated digital dreams into reality.</p>
                        <div className={styles.socialIcons}>
                            <Image src="/github.svg" alt="a" height={32} width={32} />
                            <Image src="/linkedin.svg" alt="a" height={32} width={32} />
                            <Image src="/twitter.svg" alt="a" height={32} width={32} />
                            <Image src="/insta.svg" alt="a" height={32} width={32} />
                        </div>
                    </div>
        
                </div>
            </div>
        </>
    )
}

export default Hero