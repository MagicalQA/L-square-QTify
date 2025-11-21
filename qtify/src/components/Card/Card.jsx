import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ image, follows, title }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.bottom}>
                <Chip
                    label={`${follows} Follows`}
                    className={styles.chip}
                />
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    );
}

export default Card;
