import React from 'react';
import styles from "./FirstSectionNavbar.module.css";

const FirstSectionNavbar = () => {
    return <div className={styles.firstSectionNavbar}>
        <div className={styles.navbarItem}>
            home
        </div>
        <div className={styles.navbarItem}>
            about us
        </div>
        <div className={styles.navbarItem}>
            contacts
        </div>
        <div className={styles.navbarItem}>
            checkout
        </div>
        <div className={styles.navbarItem}>
            account
        </div>
    </div>
}

export default FirstSectionNavbar;