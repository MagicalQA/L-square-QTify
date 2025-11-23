import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./Songs.module.css";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function Songs() {
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [activeGenre, setActiveGenre] = useState("All");

    useEffect(() => {
        axios
            .get("https://qtify-backend.labs.crio.do/songs")
            .then((res) => setSongs(res.data));

        axios
            .get("https://qtify-backend.labs.crio.do/genres")
            .then((res) => setGenres(res.data));
    }, []);

    const tabs = useMemo(() => {
        const base = [{ id: "all", name: "All" }];

        if (!genres?.data) return base;

        const mapped = genres.data.map((g) => ({
            id: g.key,
            name: g.label,
        }));

        return base.concat(mapped);
    }, [genres]);

    const handleTabChange = (event, newValue) => {
        setActiveGenre(newValue);
    };

    const filtered = useMemo(() => {
        if (activeGenre === "All") return songs;
        return songs.filter((song) => song.genre?.label === activeGenre);
    }, [songs, activeGenre]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Songs</h3>
            </div>

            <div className={styles.tabsWrapper}>
                <Tabs
                    value={activeGenre}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="song-genre-tabs"
                    textColor="inherit"
                    TabIndicatorProps={{ className: styles.tabIndicator }}
                    className={styles.tabs}
                >
                    {tabs.map((t) => (
                        <Tab
                            key={t.id}
                            value={t.name}
                            label={t.name}
                            className={styles.tab}
                        />
                    ))}
                </Tabs>
            </div>

            <div className={styles.carouselWrapper}>
                <Carousel
                    items={filtered}
                    renderItem={(song) => (
                        <Card
                            image={song.image || song.album?.image}
                            title={song.title}
                            likes={song.likes}
                        />
                    )}
                    prevId="songs-prev"
                    nextId="songs-next"
                />
            </div>
        </div>
    );
}

export default Songs;
