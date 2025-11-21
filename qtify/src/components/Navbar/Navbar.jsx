import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logoWrapper}>
                <Logo />
            </Link>

            <div className={styles.searchWrapper}>
                <Search
                    placeholder="Search a song of your choice"
                    searchData={searchData}
                />
            </div>

            <Button text="Give Feedback" />
        </nav>
    );
}

export default Navbar;
