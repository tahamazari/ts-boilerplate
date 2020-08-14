import * as Interfaces from "./interfaces";
import { ActionTypes } from "../constants";

export const fetchTodos = () => {
    return {
        type: ActionTypes.FETCH_TODOS,
    }
} 

export const setTodos = (payload: Interfaces.Todos[]) => {
    console.log(payload)
    return {
        type: ActionTypes.SET_TODOS,
        payload    
    }
}