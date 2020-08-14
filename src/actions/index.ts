import * as FirstActions from "./First";
import * as SecondActions from "./Second"
import * as ThirdActions from "./Third";

export const ActionCreators = Object.assign({},
    FirstActions,
    SecondActions,
    ThirdActions
);