import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerUser from "../store/reducers/reducerUser";
import reducerHotPlace from "../store/reducers/reducerHotPlace";

const reducer = combineReducers({
  reducerUser,
  reducerHotPlace,
});
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export default store;
