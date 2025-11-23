import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, endpoint }) {
    const [albums, setAlbums] = useState([]);
    const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        axios.get(endpoint).then((res) => setAlbums(res.data));
    }, [endpoint]);

    const clean = title.replace(/\s+/g, "-").toLowerCase();
    const isSongsSection = title.trim().toLowerCase() === "songs";

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>

                {!isSongsSection && (
                    <button
                        className={styles.toggle}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show All" : "Collapse"}
                    </button>
                )}
            </div>

            {isSongsSection ? (
                <div className={styles.grid}>
                    {/* Songs section should be implemented as a separate Songs component.
                        This placeholder keeps layout if Section is used for songs unintentionally */}
                    {albums.map((album) => (
                        <Card key={album.id} {...album} />
                    ))}
                </div>
            ) : showAll ? (
                <div className={styles.grid}>
                    {albums.map((album) => (
                        <Card key={album.id} {...album} />
                    ))}
                </div>
            ) : (
                <Carousel
                    items={albums}
                    renderItem={(album) => <Card {...album} />}
                    prevId={`${clean}-prev`}
                    nextId={`${clean}-next`}
                />
            )}
        </div>
    );
}

export default Section;
