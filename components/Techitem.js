"use client";
import Image from "next/image"
import styles from '@/styles/page.module.css'

const Techitem = ({ icon, name }) => {

    return (
        <>
            <div className="d-flex justify-content-center flex-column">
                <div>
                    <Image className={styles.techItem}
                        src={`/${icon}.svg`}
                        alt={icon}
                        height={62}
                        width={62}
                    />
                </div>

                <div><p className={`d-flex justify-content-center ${styles.iconName}`}>{name}</p></div>
            </div>
        </>
    )
}

export default Techitem