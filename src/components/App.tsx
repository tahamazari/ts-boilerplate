import * as React from "react";

import Header from './Header';

import "../styles/app.scss";

export class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                Hey
            </div>
        )
    }
}