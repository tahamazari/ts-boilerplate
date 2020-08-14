import * as React from "react";

//core components
import Header from "../Header";
import { ISecondState } from "../../state/Second";

interface ISecondProps {
    todos: [];
    second: ISecondState;
    setSecond: Function;
}

const Second: React.FunctionComponent<ISecondProps>= (props: ISecondProps) => {

    React.useEffect(() => {
        console.log(props.todos)
        console.log(props.second["second"])
    }, [])

    const setUniversity = (event: React.MouseEvent<HTMLButtonElement>) => {
        let value: string = event.currentTarget.value
        props.setSecond(value)
    }

    return(
        <React.Fragment>
            <Header />
            <h1>Hello, Second</h1>
            <button value="nust" onClick={setUniversity}>NUST</button>
            <button value="fast" onClick={setUniversity}>FAST</button>
            <button value="lums" onClick={setUniversity}>LUMS</button>
            <div>
                {props.second.second}
            </div>
            <div>
                {props.second.third}
            </div>
        </React.Fragment>
    )
}

export default Second;