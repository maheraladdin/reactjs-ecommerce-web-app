import {LIGHT_MODE, DARK_MODE, SYSTEM_MODE} from "../Types/appearanceType";

const initialState = {
    appearance: localStorage.getItem('appearanceMode') ? localStorage.getItem('appearanceMode').toLowerCase() : 'light mode',
}
export default function brandReducer(state = initialState, action) {
    switch (action.type) {
        case LIGHT_MODE:
            return {
                appearance: 'light mode',
            }
        case DARK_MODE:
            return {
                appearance: 'dark mode',
            }
        case SYSTEM_MODE:
            return {
                appearance: 'system mode',
            }
        default:
            return state;
    }
}