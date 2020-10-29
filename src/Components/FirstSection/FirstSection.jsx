import React from 'react';
import styles from "./FirstSection.module.css";
import FirstSectionNavbar from './FirstSectionNavbar/FirstSectionNavbar';
import FirstSectionContent from './FirstSectionContent/FirstSectionContent';

const FirstSection = () => {
    return <div className={styles.firstSection}>
        <FirstSectionNavbar />
        <FirstSectionContent />
        <button className={styles.buttonTasteIt}>taste it</button>
    </div>
}

export default FirstSection;