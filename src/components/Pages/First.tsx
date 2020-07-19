import * as React from "react"

import Header from "../Header"

interface FirstProps {
    name?: string,
}


export const First: React.SFC<FirstProps> = (props) => {
    return(
        <React.Fragment>
            <Header />
            <h1>Hello, First</h1>;
        </React.Fragment>
    ) 
}
   