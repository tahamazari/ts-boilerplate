import * as Interfaces from "../actions/Second/interfaces";
import { ActionTypes } from "../actions/constants";
import { SystemState } from "../actions/Second/interfaces";

let initialState: SystemState = {
    second: "second",
    third: "third"
}

export const SecondReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ActionTypes.setSecond:
            return {
                ...state,
                second: action.payload
            }
        default: 
            return state
    }
}

//give deafult value to state for initialization