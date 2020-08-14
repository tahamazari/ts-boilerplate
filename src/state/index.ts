import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
// import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from "connected-react-router";

import epics from '../epics';
import { reducers } from "../reducers";

const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
// const routMiddleware = routerMiddleware(history);
export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(epicMiddleware, routerMiddleware(history))
    );
  
    epicMiddleware.run(epics);
  
    return store;
}