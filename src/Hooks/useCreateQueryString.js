import {useSelector} from "react-redux";

export default function useCreateQueryString() {
    const state = useSelector(state => state.filterReducer);
    let queryCategories = '';
    for(const category of state.categories) {
        queryCategories += `&category=${category}`;
    }
    let queryBrands = '';
    for(const brand of state.brands) {
        queryBrands += `&brand=${brand}`;
    }
    return `sort=${state.sort}&keyword=${state.keyword}${queryCategories}${queryBrands}&price[gt]=${state.lesserPrice}&price[ls]=${state.greaterPrice}`;
}