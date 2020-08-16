import * as React from 'react';
import { Route, Switch } from 'react-router';

import First from "../containers/First"
import Second from "../containers/Second";
import Third from "../containers/Third";

export default (
    <Switch>
        <Route exact path="/first" component={First}/>
        <Route exact path="/second" component={Second}/>
        <Route exact path="/third" component={Third}/>
    </Switch>
);