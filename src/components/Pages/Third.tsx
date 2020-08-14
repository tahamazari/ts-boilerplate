import * as React from "react"

//core components
import Header from "../Header"

interface IThirdProps {
    name?: string,
}

const Third: React.FunctionComponent<IThirdProps> = (props) => {
    return(
        <React.Fragment>
            <Header />
            <h1>Hello, Third</h1>
        </React.Fragment>
    )
}

export default Third;