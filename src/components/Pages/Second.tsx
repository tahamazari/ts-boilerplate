import * as React from "react"

//core components
import Header from "../Header"
import * as SecondInterfaces from "../../actions/Second/interfaces"

interface SecondProps {
    todos: [];
    second: SecondInterfaces.SystemState;
    setSecond: Function;
}

class Second extends React.Component<SecondProps> {

    componentDidMount(){
        console.log(this.props.todos)
        console.log(this.props.second["second"])
    }

    setUniversity = (event: React.MouseEvent<HTMLButtonElement>) => {
        let value: string = event.currentTarget.value
        this.props.setSecond(value)
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                <h1>Hello, Second</h1>
                <button value="nust" onClick={this.setUniversity}>NUST</button>
                <button value="fast" onClick={this.setUniversity}>FAST</button>
                <button value="lums" onClick={this.setUniversity}>LUMS</button>
                <div>
                    {this.props.second.second}
                </div>
                <div>
                    {this.props.second.third}
                </div>
            </React.Fragment>
        ) 
    }
}

export default Second;