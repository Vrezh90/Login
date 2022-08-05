import {authApi} from "../../Api/api";
import {setAuthUserData} from "../Action-Creators/action-creators";
import {stopSubmit} from "redux-form";


export const getAuthUserData = () => (dispatch) => {
    authApi.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {email, login} = response.data.data;
                dispatch(setAuthUserData(email, login, true));
            }
        })
}

export const setLogin = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: message}));
            }
        })
}

export const setLogout = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, false));
            }
        })
}