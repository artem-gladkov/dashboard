import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import initialReducer from "./initialReducer";
import apiCardsRedecer from "./apiCardsRedecer";

const reducers = combineReducers({
  initial: initialReducer,
  auth: authReducer,
  users: usersReducer,
  apiCards: apiCardsRedecer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store