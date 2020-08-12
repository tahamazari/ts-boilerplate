import 'rxjs';
import { ActionTypes } from "../actions/constants";
import { ofType } from 'redux-observable';
import { mergeMap, flatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

//Setter Actions and Interfaces
import * as FirstInterfaces from "../actions/First/interfaces";
import * as FirstActions from "../actions/First";

//constants
const API_POINT = "https://jsonplaceholder.typicode.com/"

export const fetchTodosEpic = action$ => action$.pipe(
    ofType(ActionTypes.FETCH_TODOS),
    mergeMap(action =>
      ajax.getJSON(`${API_POINT}`)
      .pipe(
        flatMap((result: FirstInterfaces.Todos[]) => {
            const response = result
            return [
                FirstActions.setTodos(response)
            ]
        })
      )
    )
  );