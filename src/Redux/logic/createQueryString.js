export default function createQueryString(state) {
        let queryCategories = '';
        for (const category of state.categories) {
            queryCategories += `category[in][]=${category}&`;
        }
        let queryBrands = '';
        for (const brand of state.brands) {
            queryBrands += `brand[in][]=${brand}&`;
        }
        const sortQuery = state.sort ? `sort=${state.asc ? '-' : ''}${state.sort}&` : '';
        const keywordQuery = state.keyword ? `keyword=${state.keyword}&` : '';
        const priceGreaterThanQuery = state.lesserPrice ? `price[gt]=${state.lesserPrice}&` : '';
        const priceLessThanQuery = state.greaterPrice ? `price[lt]=${state.greaterPrice}&` : '';

        const queryString =  `${sortQuery}${keywordQuery}${queryCategories}${queryBrands}${priceLessThanQuery}${priceGreaterThanQuery}`;
        if(queryString[queryString.length-1] === '&') {
            return queryString.slice(0, queryString.length-1);
        }
        return queryString;
}