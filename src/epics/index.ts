import { combineEpics } from 'redux-observable';

import * as FirstEpics from "./First";

export default combineEpics(
    FirstEpics.fetchTodosEpic
)