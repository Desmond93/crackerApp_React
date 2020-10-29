import React from 'react';
import styles from "./SecondSectionCrackerInfo.module.css";
import circleCracker from "../../../img/SecondSection_circleCracker.png"

const SecondSectionCracerInfo = () => {
    return <div className={styles.secondSectionCracerInfo}>
        <div className={styles.header}>
            about cracker
        </div>
        <div className={styles.textContainer}>
            <img className={styles.circleCrackerImg} src={circleCracker} alt="Circle cracker img" />
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id
                est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, architecto beatae vitae dicta sunt
                explicabo. Neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem
            </div>
        </div>
        <div className={styles.cracker}>
            Cracker
        </div>
    </div>
}

export default SecondSectionCracerInfo;