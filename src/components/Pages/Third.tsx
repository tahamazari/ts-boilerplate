import * as React from "react"

import Header from "../Header"

interface ThirdProps {
    name?: string,
}


export const Third: React.SFC<ThirdProps> = (props) => {
    return(
        <React.Fragment>
            <Header />
            <h1>Hello, Third</h1>;
        </React.Fragment>
    ) 
}