import {useState} from "react";

export default function useHeader() {
    const expand = 'lg';

    const setLocalStorage = (e, storageKey) => {
        localStorage.setItem(storageKey, e.target.textContent);
    }

    const [keyWord, setKeyWord] = useState("");

    const handleSearch = (e) => {
        setKeyWord(e.target.value);
    }

    return {
        expand,
        setLocalStorage,
        keyWord,
        handleSearch
    }
}