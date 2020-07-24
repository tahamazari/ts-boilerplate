import { Dispatch } from "redux";

//core components
import * as Interfaces from "./interfaces";
import { ActionTypes } from "../constants";

export const setSecond = (data: string) => {
    return (dispatch: Dispatch) => {
        dispatch<Interfaces.setSecondAction>({
            type: ActionTypes.setSecond,
            payload: data
        })
    }
}