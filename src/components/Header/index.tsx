import * as React from "react";
import { Link } from "react-router-dom";

import '../../styles/header.scss';

interface IProps {}

interface IState {
    urls: string[]
}

export default class Header extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props)
        this.state = {
            urls: ['first', 'second', 'third']
        }
    }
    render(){
        return(
            <div className="header-container">
                {
                    this.state.urls.map((item, i) => (
                        <div className="header-items">
                            <Link to={`/${item}`} key={i}>{item}</Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}