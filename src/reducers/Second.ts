import { ActionTypes } from "../actions/constants";
import { SecondState}  from "../state/Second";

export const SecondReducer = (state = SecondState, action:any) => {
    switch (action.type) {
        case ActionTypes.SET_SECOND:
            return {
                ...state,
                second: action.payload
            }
        default: 
            return state
    }
}

//give deafult value to state for initialization