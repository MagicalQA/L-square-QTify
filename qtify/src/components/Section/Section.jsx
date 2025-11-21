import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title, endpoint }) {
    const [albums, setAlbums] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios
            .get(endpoint)
            .then((res) => setAlbums(res.data))
            .catch((err) => console.error(err));
    }, [endpoint]);

    const visibleAlbums = showAll ? albums : albums.slice(0, 6);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>

                <button
                    className={styles.toggle}
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Collapse" : "Show all"}
                </button>
            </div>

            <div className={styles.grid}>
                {visibleAlbums.map((album) => (
                    <Card
                        key={album.id}
                        image={album.image}
                        follows={album.follows}
                        title={album.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Section;
