import { createStore, applyMiddleware  } from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducers/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
