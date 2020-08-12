import axios from "axios";
import { Dispatch } from "redux";

// core components
import * as Interfaces from "./interfaces";
import { ActionTypes } from "../constants";

const API_POINT = "https://jsonplaceholder.typicode.com/"

// export const fetchTodos = () => {
//     return async (dispatch: Dispatch) => {
//         const response = await axios.get<Interfaces.Todos[]>(`${API_POINT}todos`)

//         dispatch<Interfaces.FetchTodosAction>({
//             type: ActionTypes.fetchTodos,
//             payload: response.data
//         })
//     }
// }

export const fetchTodos = () => {
    return {
        type: ActionTypes.FETCH_TODOS,
    }
} 

export const setTodos = (payload: Interfaces.Todos[]) => {
    return {
        type: ActionTypes.SET_TODOS,
        payload    
    }
}

//dispatch should by of type Dispatch i.e imported from redux
//atm no type check enforcement
//response should have a type
//action types should be defined using enums