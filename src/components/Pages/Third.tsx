import * as React from "react";

//core components
import Header from "../Header";
import { IThirdState } from "../../state/Third";

interface IThirdProps {
    third: IThirdState,
    incrementThirdNumber: Function,
    decrementThirdNumber: Function
}

const Third: React.FunctionComponent<IThirdProps> = (props: IThirdProps) => {
    
    const increment = () => {
        props.incrementThirdNumber()
    }

    const decrement = () => {
        props.decrementThirdNumber()
    }

    return(
        <React.Fragment>
            <Header />
            <h1>Hello, Third</h1>
            <div>
                <button onClick={decrement}>decrement</button>
                {props.third.thirdNumber}
                <button onClick={increment}>increment</button>
            </div>
        </React.Fragment>
    )
}

export default Third;