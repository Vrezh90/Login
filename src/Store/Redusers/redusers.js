import {SET_USER_DATA} from "../Action-types/action-types";

const initialState = {
    email: null,
    password: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};