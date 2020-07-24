import { ActionTypes } from "../constants";

export interface setSecondAction {
    type: ActionTypes.setSecond;
    payload: string
}

export interface SystemState {
    second: string;
    third: string;
}