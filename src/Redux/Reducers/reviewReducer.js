import {GET_REVIEWS, CREATE_REVIEW} from "../Types/reviewTypes";

const initialState = {
    loading: true,
    reviews: [],
    review: {},
    status: 0,
}
export default function reviewReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                loading: true,
                reviews: action.payload.reviews,
                status: action.payload.status,
                numberOfPages: action.payload.numberOfPages,
            }
        case CREATE_REVIEW:
            return {
                ...state,
                loading: true,
                review: action.payload.review,
                status: action.payload.status,
            }
        default:
            return state;
    }
}