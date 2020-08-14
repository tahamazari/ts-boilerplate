import * as React from 'react';
import { Route, Switch } from 'react-router';
import { withRouter } from "react-router-dom";

import First from "../containers/First"
import Second from "../containers/Second";
import Third from "../containers/Third";

export default (
    <Switch>
        <Route exact path="/first" component={withRouter(First)}/>
        <Route exact path="/second" component={withRouter(Second)}/>
        <Route exact path="/third" component={withRouter(Third)}/>
    </Switch>
);