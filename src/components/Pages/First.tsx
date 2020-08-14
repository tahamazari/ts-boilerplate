import * as React from 'react';

//core components
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


const First: React.FunctionComponent<IFirstProps> = (props: IFirstProps) => {
    React.useEffect(() => {
        console.log("heheheh")
        props.fetchTodos()
    }, []);
    const mapTodos = (todos: []) => {
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

    return(
        <React.Fragment>
            <Header />
            <div>First Page</div>
            <div>
                {
                    Object.keys(props.todos).length != 0 ?
                    mapTodos(props.todos.todos) : <div>No data available</div>
                }
            </div>
        </React.Fragment>
    )
}

export default First;