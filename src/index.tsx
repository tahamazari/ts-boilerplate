import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import "rxjs";

//core components
import configureStore from "./state";
import appRoutes from "./routes/appRoutes";
import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'react-router-redux';

export const history = createBrowserHistory();
const store = configureStore()
// const routMiddleware = routerMiddleware(history);

const appConatiner = (
    <Provider store={store}>
        <Router history={history}>
            {appRoutes}
        </Router>
    </Provider>
)

const ROOT = document.querySelector(".index");
ReactDOM.render(appConatiner, ROOT)