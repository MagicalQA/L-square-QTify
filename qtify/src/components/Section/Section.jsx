import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";

export default function Section({ title, endpoint }) {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios.get(endpoint).then(res => setData(res.data));
    }, [endpoint]);

    const visibleData = showAll ? data : data.slice(0, 10);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <button className={styles.toggle} onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Collapse" : "Show All"}
                </button>
            </div>

            <div className={styles.grid}>
                {visibleData.map(album => (
                    <Card
                        key={album.id}
                        image={album.image}
                        title={album.title}
                        follows={album.follows}
                    />
                ))}
            </div>
        </div>
    );
}
