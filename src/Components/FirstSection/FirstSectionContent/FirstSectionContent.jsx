import React from 'react';
import styles from "./FirstSectionContent.module.css";

const FirstSectionContent = () => {
    return <div className={styles.firstSectionContent}>
        <div className={styles.contentText}>
            Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit, sed do<br/>
            eiusmod tempor incididunt ut labore<br/>et dolore magna aliqua.<br/>Lorem ipsum dolor sit amet,
        </div>
        <div className={styles.contentHeaderContainer}>
            <div className={styles.contentHeader}>
                mostly tastes<br/>with freshes
            </div>
        </div>
    </div>
}

export default FirstSectionContent;