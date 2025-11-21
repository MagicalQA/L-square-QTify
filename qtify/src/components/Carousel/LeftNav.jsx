import React from "react";
import { ReactComponent as LeftIcon } from "../../assets/left_arrow.svg";
import styles from "./Carousel.module.css";

export default function LeftNav({ id }) {
    return (
        <button id={id} className={`${styles.navButton} ${styles.leftBtn}`}>
            <LeftIcon />
        </button>
    );
}
