import {SET_SORT_BY, SET_KEYWORD, ADD_CATEGORY, REMOVE_CATEGORY, ADD_BRAND, REMOVE_BRAND, SET_LESSER_PRICE, SET_GREATER_PRICE} from "../Types/FilterTypes";

export const setSortBy = (sort,asc) => ({
    type: SET_SORT_BY,
    payload: {
        sort: `${asc ? '-' : ''}${sort}`,
        asc: true
    }
});

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

