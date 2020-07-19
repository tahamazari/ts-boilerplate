import * as React from "react"

import Header from "../Header"

interface SecondProps {
    name?: string,
}


export const Second: React.SFC<SecondProps> = (props) => {
    return(
        <React.Fragment>
            <Header />
            <h1>Hello, Second</h1>;
        </React.Fragment>
    ) 
}