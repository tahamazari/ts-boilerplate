import { ActionTypes } from "../constants";

export interface setSecondAction {
    type: ActionTypes.SET_SECOND;
    payload: string
}