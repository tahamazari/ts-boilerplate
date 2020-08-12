import { createStore, applyMiddleware } from "redux";
import { reducers } from "../reducers";
import { createEpicMiddleware } from 'redux-observable';

import epics from '../epics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(epicMiddleware)
    );
  
    epicMiddleware.run(epics);
  
    return store;
}