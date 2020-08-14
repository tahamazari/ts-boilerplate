import 'rxjs';
import { ActionTypes } from "../actions/constants";
import { ofType } from 'redux-observable';
import { mergeMap, flatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
// import { push } from 'react-router-redux';
import {history} from "../index";
import { replace } from "connected-react-router";
import { push } from "connected-react-router"

//Setter Actions and Interfaces
import * as FirstInterfaces from "../actions/First/interfaces";
import * as FirstActions from "../actions/First";

//constants
const API_POINT = "https://jsonplaceholder.typicode.com"

export const fetchTodosEpic = (action$: any) => action$.pipe(
    ofType(ActionTypes.FETCH_TODOS),
    mergeMap(() =>
      ajax.getJSON(`${API_POINT}/todos`)
      .pipe(
        flatMap((result: FirstInterfaces.Todos[]) => {
            return [
                FirstActions.setTodos(result),
                // history.push("/third")
                push("/third")
            ]
        })
      )
    )
  );
