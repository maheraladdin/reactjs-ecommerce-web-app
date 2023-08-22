import {useState} from "react";
import {useDispatch} from "react-redux";
import {setQueryString, setKeyword} from "../Redux/Actions/filterActions";

export default function useHeader() {
    const expand = 'lg';
    const dispatch = useDispatch();

    const setLocalStorage = (e, storageKey) => {
        localStorage.setItem(storageKey, e.target.textContent);
    }

    const [keyWord, setKeyWord] = useState("");

    const handleSearch = (e) => {
        setKeyWord(e.target.value);
    }

    const onClickSearch = async () => {
        dispatch(setKeyword(keyWord));
        dispatch(setQueryString());
    }



    return {
        expand,
        setLocalStorage,
        keyWord,
        handleSearch,
        onClickSearch
    }
}