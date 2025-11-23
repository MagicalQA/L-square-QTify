import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card(props) {
    const { image, follows, title, likes } = props;
    const chipLabel = typeof likes !== "undefined" ? `${likes} Likes` : `${follows} Follows`;

    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.bottom}>
                <Chip
                    label={chipLabel}
                    className={styles.chip}
                />
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    );
}

export default Card;
