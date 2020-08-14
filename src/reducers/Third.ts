import { ActionTypes } from "../actions/constants";
import { ThirdState }  from "../state/Third";

export const ThirdReducer = (state = ThirdState, action:any) => {
    switch (action.type) {
        case ActionTypes.INC_THIRD_NUM:
            return {
                ...state,
                thirdNumber: ++state.thirdNumber
            }
        case ActionTypes.DEC_THIRD_NUM: {
            return {
                ...state,
                thirdNumber: --state.thirdNumber
            }
        }
        default: 
            return state
    }
}