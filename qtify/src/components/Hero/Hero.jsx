import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/hero_headphones.png";

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.textWrapper}>
                <h1 className={styles.headingMain}>
                    100 Thousand Songs, ad-free
                </h1>

                <h2 className={styles.headingSub}>
                    Over thousands podcast episodes
                </h2>
            </div>

            <img
                src={headphones}
                alt="headphones"
                className={styles.heroImage}
            />
        </div>
    );
}

export default Hero;
