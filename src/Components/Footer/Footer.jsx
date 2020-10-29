import React from 'react';
import styles from "./Footer.module.css";
import phoneImg from "../../img/Footer_phone.png";
import adressImg from "../../img/Footer_mapMarker.png";
import shareUsImg from "../../img/Footer_shareUs.png";
import pinterestImg from "../../img/Footer_pinterest.png";
import facebookImg from "../../img/Foopter_facebook.png";
import googleImg from "../../img/Footer_google.png";

const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.footerCol}>
            <img className={styles.footerColImg} src={phoneImg} alt="Phone img" />
            <div className={styles.footerColText}>
                <div className={styles.footerColTextHeader}>
                    phone
                </div>
                <div className={styles.footerColTextInfo}>
                    +43 ( 987 ) 345 - 6782
                </div>
            </div>
        </div>
        <div className={styles.footerCol}>
            <img className={styles.footerColImg} src={adressImg} alt="Adress img" />
            <div className={styles.footerColText}>
                <div className={styles.footerColTextHeader}>
                    adress
                </div>
                <div className={styles.footerColTextInfo}>
                    Cracker Inc.<br/>
                    10 Cloverfield Lane<br/>
                    Berlin, IL 10928<br/>
                    Germany
                </div>
            </div>
        </div>
        <div className={styles.footerCol}>
            <img className={styles.footerColImg} src={shareUsImg} alt="Share us img" />
            <div className={styles.footerColText}>
                <div className={`${styles.footerColTextHeader} ${styles.footerColTextShareUs}`}>
                    share us
                </div>
                <div className={styles.footerColTextInfo}>
                    <div className={styles.footerColTextLinks}>
                        <img className={styles.footerColTextLinksImg} src={pinterestImg} alt="Pinterest img" />
                        <a href="https://www.pinterest.com/">
                            https://www.pinterest.com/
                        </a>
                    </div>
                    <div className={styles.footerColTextLinks}>
                        <img className={styles.footerColTextLinksImg} src={facebookImg} alt="Facebook img" />
                        <a href="https://www.facebook.com/">
                            https://www.facebook.com/
                        </a>
                    </div>
                    <div className={styles.footerColTextLinks}>
                        <img className={styles.footerColTextLinksImg} src={googleImg} alt="Google img" />
                        <a href="https://www.google.com/">
                            https://www.google.com/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;