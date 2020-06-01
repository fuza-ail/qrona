import { createStore, combineReducers, applyMiddleware } from "redux"
import usersReducers from './reducers/usersReducers'
import locationsReducers from './reducers/locationsReducers'
import thunk from 'redux-thunk'

const reducers = combineReducers({ usersReducers, locationsReducers })
const store = createStore(reducers, applyMiddleware(thunk))


export default store