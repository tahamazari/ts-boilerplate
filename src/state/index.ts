import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from "connected-react-router";

import epics from '../epics';
import { reducers } from "../reducers";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(epicMiddleware)
    );
  
    epicMiddleware.run(epics);
  
    return store;
}