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
    const sortQuery = state.sort ? `sort=${state.asc ? '-': ''}${state.sort}` : '';
    const keywordQuery = state.keyword ? `&keyword=${state.keyword}` : '';
    const priceGreaterThanQuery = state.lesserPrice ? `&price[gt]=${state.lesserPrice}` : '';
    const priceLessThanQuery = state.greaterPrice ? `&price[lt]=${state.greaterPrice}` : '';

    return () =>  `${sortQuery}${keywordQuery}${queryCategories}${queryBrands}${priceLessThanQuery}${priceGreaterThanQuery}`;
}