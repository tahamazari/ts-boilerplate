import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { App } from "../App";
import { First } from "../Pages/First";
import { Second } from "../Pages/Second";
import { Third } from "../Pages/Third";

export default (
    <Switch>
        <Route exact path="/first" component={First}/>
        <Route exact path="/second" component={Second}/>
        <Route exact path="/third" component={Third}/>
        <Route exact path="/" component={App}/>
    </Switch>
);