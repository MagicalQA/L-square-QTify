import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import useAutocomplete from "@mui/base/useAutocomplete/useAutocomplete";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")(() => ({
    width: "100%",
    margin: 0,
    padding: 0,
    position: "absolute",
    borderRadius: "0 0 10px 10px",
    border: "1px solid var(--color-primary)",
    backgroundColor: "var(--color-black)",
    top: 50,
    maxHeight: 500,
    overflowY: "auto",
    zIndex: 10,
    listStyle: "none",
}));

function Search({ searchData, placeholder }) {
    const {
        getRootProps,
        value,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: "search-autocomplete",
        options: searchData || [],
        getOptionLabel: (option) => option.title,
    });

    const navigate = useNavigate();
    const onSubmit = (e, value) => {
        e.preventDefault();
        navigate(`/album/${value.slug}`);
    };

    return (
        <div>
            <form className={styles.wrapper} onSubmit={(e) => onSubmit(e, value)}>
                <div {...getRootProps()} className={styles.inputRoot}>
                    <input
                        name="album"
                        className={styles.search}
                        placeholder={placeholder}
                        required
                        {...getInputProps()}
                    />
                </div>

                <button className={styles.searchButton} type="submit">
                    <SearchIcon />
                </button>
            </form>

            {groupedOptions.length > 0 && (
                <Listbox {...getListboxProps()}>
                    {groupedOptions.map((option, index) => {
                        const artists = option.songs.flatMap((s) => s.artists);
                        return (
                            <li {...getOptionProps({ option, index })}>
                                <p>{option.title}</p>
                                <p>{truncate(artists.join(", "), 40)}</p>
                            </li>
                        );
                    })}
                </Listbox>
            )}
        </div>
    );
}

export default Search;
