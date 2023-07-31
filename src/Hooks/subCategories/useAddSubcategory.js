import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {createSubcategory} from "../../Redux/Actions/subcategoryActions";
import useNotify from "../useNotify";
export default function useAddSubcategory() {
    const [subcategoryName, setSubcategoryName] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const notify = useNotify();

    const categories = useSelector(state => state.categoryReducer.categories);

    const subcategoryStatus = useSelector(state => state.subcategoryReducer.status);

    const error = useSelector(state => state.errorReducer.error);



    useEffect(() => {
        dispatch(getCategories(1, Number.MAX_SAFE_INTEGER, "name"));
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

        setLoading(true);

        await dispatch(createSubcategory({
            body: {
                name: subcategoryName,
                category: selectedCategoryId,
            },
            config: {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_ADMIN_DEV_TOKEN}`
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