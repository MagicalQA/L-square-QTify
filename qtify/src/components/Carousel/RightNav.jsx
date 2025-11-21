import React from "react";
import { ReactComponent as RightIcon } from "../../assets/right_arrow.svg";
import styles from "./Carousel.module.css";

export default function RightNav({ id }) {
    return (
        <button id={id} className={`${styles.navButton} ${styles.rightBtn}`}>
            <RightIcon />
        </button>
    );
}
