import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {createSubcategory} from "../../Redux/Actions/subcategoryActions";
import useNotify from "../useNotify";
import useGetToken from "../auth/useGetToken";
export default function useAddSubcategory() {
    const [subcategoryName, setSubcategoryName] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const {token} = useGetToken();

    const notify = useNotify();

    const categories = useSelector(state => state.categoryReducer.categories);

    const subcategoryStatus = useSelector(state => state.subcategoryReducer.status);

    const error = useSelector(state => state.errorReducer.error);


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


    useEffect(() => {
        if (subcategoryStatus === 201) return notify("subcategory is added successfully", "success");
        else if (error) setErrorMessage(error.message);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subcategoryStatus, error]);

    useEffect(() => {
        if (errorMessage)
            notify(errorMessage, "error", {
                onClose: () => setErrorMessage(""),
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorMessage]);


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