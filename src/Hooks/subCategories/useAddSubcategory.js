import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {createSubcategory} from "../../Redux/Actions/subcategoryActions";
import useNotify from "../useNotify";

export default function useAddSubcategory() {

    const dispatch = useDispatch();
    const notify = useNotify();


    const [subcategoryName, setSubcategoryName] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    // get the token from redux store
    const token = useSelector(state => state.userReducer.token);

    // get the categories from redux store
    const categories = useSelector(state => state.categoryReducer.categories);


    useEffect(() => {
        if(navigator.onLine === true) dispatch(getCategories(1, Number.MAX_SAFE_INTEGER, "name"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleSubcategoryNameChange = (e) => {
        setSubcategoryName(e.target.value);
        setValidated(true);
    }

    const handleSelectedCategoryIdChange = (e) => {
        setSelectedCategoryId(e.target.value);
    }

    const handleAddSubcategory = async (e) => {
        e.preventDefault();

        if(subcategoryName === "" || selectedCategoryId === "") {
            setValidated(true);
            return notify("please fill all fields", "error")
        }

        if(!navigator.onLine) return notify("please check your internet connection", "error");

        setLoading(true);

        await dispatch(createSubcategory({
            body: {
                name: subcategoryName,
                category: selectedCategoryId,
            },
            config: {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        }));

        setLoading(false);
    }

    useEffect(() => {
        if (!loading) {
            setSubcategoryName("")
            setValidated(false);
        }
    }, [loading]);


    return {
        subcategoryName,
        loading,
        categories,
        handleSubcategoryNameChange,
        handleSelectedCategoryIdChange,
        handleAddSubcategory,
        validated
    }

}