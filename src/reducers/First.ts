import * as Interfaces from "../actions/First/interfaces";
import { ActionTypes } from "../actions/constants";

export const FirstReducer = (state: Interfaces.Todos[] = [], action:any) => {
    switch (action.type) {
        case ActionTypes.SET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        default: 
            return state
    }
}

//give deafult value to state for initialization