//core components
import { ActionTypes } from "../constants";

export const setSecond = (payload: string) => {
    return {
        type: ActionTypes.SET_SECOND,
        payload
    }
}