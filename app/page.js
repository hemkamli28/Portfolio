"use client";
import Image from 'next/image'
import styles from '../styles/page.module.css'

export default function Home() {
  return (
   <section className={styles.container} >

    <Image src="/two.svg" alt="a" height={400} width={400} className={styles.LoopingSVG}/>
    
   </section>
  )
}
