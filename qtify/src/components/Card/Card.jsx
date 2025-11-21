import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ image, title, follows }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.bottom}>
                <p className={styles.title}>{title}</p>
                <Chip label={`${follows} Follows`} className={styles.chip} />
            </div>
        </div>
    );
}
