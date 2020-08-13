import * as React from "react"

import Header from "../Header"

interface IFirstProps {
    todos: any;
    fetchTodos: Function;
}

interface IMapTodos {
    id: number;
    userId: number;
    title: string;
    completed: false;
}

class First extends React.Component<IFirstProps> {
    componentDidMount(){
        this.props.fetchTodos()
    }
    mapTodos = (todos: []) => {
        return(
            <div>
                {
                    todos.map((data: IMapTodos, key) => {
                        return(
                            <React.Fragment key={key}>
                                <div>{data.completed}</div>
                                <div>{data.userId}</div>
                                <div>{data.title}</div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        )
    }
    render(){
        return(
            <React.Fragment>
                <Header />
                <div>First page</div>
                <div>
                    {
                        Object.keys(this.props.todos).length != 0 ?
                        this.mapTodos(this.props.todos.todos) : <div>No data available</div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default First;