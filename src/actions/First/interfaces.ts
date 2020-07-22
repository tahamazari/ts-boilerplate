import { ActionTypes } from "../constants";

export interface Todos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todos[];
}