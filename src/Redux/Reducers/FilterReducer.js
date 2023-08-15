import {
    SET_SORT_BY,
    SET_KEYWORD,
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    ADD_BRAND,
    REMOVE_BRAND,
    SET_LESSER_PRICE,
    SET_GREATER_PRICE,
    SET_QUERY_STRING
} from "../Types/FilterTypes";

const initialState = {
    sort: '',
    asc: true,
    keyword: '',
    categories: [],
    brands: [],
    lesserPrice: 0,
    greaterPrice: 0,
    queryString: '',
}

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sort: action.payload.sort,
                asc: action.payload.asc,
            }
        case SET_KEYWORD:
            return {
                ...state,
                keyword: action.payload.keyword,
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload.category],
            }
        case REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category !== action.payload.category),
            }
        case ADD_BRAND:
            return {
                ...state,
                brands: [...state.brands, action.payload.brand],
            }
        case REMOVE_BRAND:
            return {
                ...state,
                brands: state.brands.filter(brand => brand !== action.payload.brand),
            }
        case SET_LESSER_PRICE:
            return {
                ...state,
                lesserPrice: action.payload.lesserPrice,
            }
        case SET_GREATER_PRICE:
            return {
                ...state,
                greaterPrice: action.payload.greaterPrice,
            }
        case SET_QUERY_STRING:
            return {
                ...state,
                queryString: action.payload.queryString,
            }
        default:
            return state;
    }
}