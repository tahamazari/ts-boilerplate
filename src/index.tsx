import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import "rxjs";

//core components
import configureStore from "./state";
import appRoutes from "./routes/appRoutes";
import history from "./history"

const store = configureStore()

const appConatiner = (
    <Router history={history}>
        <Provider store={store}>
            {appRoutes}
        </Provider>
    </Router>
)

const ROOT = document.querySelector(".index");
ReactDOM.render(appConatiner, ROOT)