import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {authReducer} from "./Redusers/redusers";
import thunk from 'redux-thunk';



const Reducers = combineReducers({
    form: formReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
