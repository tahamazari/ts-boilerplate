import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

//core components
import configureStore from "./state";
import appRoutes from "./routes/appRoutes";

const store = configureStore()

const appConatiner = (
    <Provider store={store}>
        <Router>
            {appRoutes}
        </Router>
    </Provider>
)

const ROOT = document.querySelector(".index");
ReactDOM.render(appConatiner, ROOT)