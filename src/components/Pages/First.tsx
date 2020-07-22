import * as React from "react"

import Header from "../Header"

interface FirstProps {
    todos: [];
    fetchTodos: Function
}

interface FirstState {
    allTodos: []
}


class First extends React.Component<FirstProps, FirstState> {
    constructor(props: FirstProps){
        super(props)
        this.state = {
            allTodos: []
        }
    }
    componentDidMount(){
        this.props.fetchTodos()
    }
    render(){
        return(
            <React.Fragment>
                <Header />
                <div>First page</div>
            </React.Fragment>
        )
    }
}

export default First;