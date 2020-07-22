import * as React from "react"

//core components
import Header from "../Header"

interface SecondProps {
    todos: []
}


class Second extends React.Component<SecondProps> {

    componentDidMount(){
        console.log(this.props.todos)
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                <h1>Hello, Second</h1>;
            </React.Fragment>
        ) 
    }
}

export default Second;