import {useState} from "react";
import {useDispatch} from "react-redux";
import {setQueryString, setKeyword} from "../Redux/Actions/filterActions";
import useCreateQueryString from "./useCreateQueryString";

export default function useHeader() {
    const expand = 'lg';
    const dispatch = useDispatch();

    const setLocalStorage = (e, storageKey) => {
        localStorage.setItem(storageKey, e.target.textContent);
    }

    const [keyWord, setKeyWord] = useState("");

    const queryString = useCreateQueryString();

    const handleSearch = (e) => {
        setKeyWord(e.target.value);
    }

    const onClickSearch = async () => {
        if(!keyWord) return;
        dispatch(setKeyword(keyWord));
        dispatch(setQueryString(queryString()));
    }


    return {
        expand,
        setLocalStorage,
        keyWord,
        handleSearch,
        onClickSearch
    }
}