import { SET_USER_DATA} from "../Action-types/action-types";


export const setAuthUserData = ( email, login, isAuth) => ({
        type: SET_USER_DATA,
        payload: {email, login, isAuth}
});

