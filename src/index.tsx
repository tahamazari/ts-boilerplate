import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import appRoutes from "./components/Routes/appRoutes";

const appConatiner = (
    <Router>
        {appRoutes}
    </Router>
)

const ROOT = document.querySelector(".index");
ReactDOM.render(appConatiner, ROOT)