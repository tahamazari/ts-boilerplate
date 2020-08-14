import { ActionTypes } from "../constants";

export const incrementThirdNumber = () => {
    return {
        type: ActionTypes.INC_THIRD_NUM
    }
}

export const decrementThirdNumber = () => {
    return {
        type: ActionTypes.DEC_THIRD_NUM
    }
}