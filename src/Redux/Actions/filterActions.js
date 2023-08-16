import {
    SET_SORT_BY,
    SET_KEYWORD,
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    ADD_BRAND,
    REMOVE_BRAND,
    SET_LESSER_PRICE,
    SET_GREATER_PRICE,
    SET_QUERY_STRING, REMOVE_CATEGORIES, REMOVE_BRANDS
} from "../Types/FilterTypes";

export const setSortBy = (sort,asc) => {
    console.log(sort,asc);
    return({
    type: SET_SORT_BY,
    payload: {
        sort,
        asc,
    }
})};

export const setKeyword = (keyword) => ({
    type: SET_KEYWORD,
    payload: {
        keyword,
    }
});

export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    payload: {
        category,
    }
});

export const removeCategory = (category) => ({
    type: REMOVE_CATEGORY,
    payload: {
        category,
    }
});

export const removeCategories = () => ({
    type: REMOVE_CATEGORIES,
});

export const addBrand = (brand) => ({
    type: ADD_BRAND,
    payload: {
        brand,
    }
});

export const removeBrand = (brand) => ({
    type: REMOVE_BRAND,
    payload: {
        brand,
    }
});

export const removeBrands = () => ({
    type: REMOVE_BRANDS,
});

export const setLesserPrice = (lesserPrice) => ({
    type: SET_LESSER_PRICE,
    payload: {
        lesserPrice,
    }
});

export const setGreaterPrice = (greaterPrice) => ({
    type: SET_GREATER_PRICE,
    payload: {
        greaterPrice,
    }
});

export const setQueryString = () => ({
    type: SET_QUERY_STRING,
});

